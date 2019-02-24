// Libraries
import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
// Components
import Error from './shared/Error'
import Loading from './shared/Loading'
import SearchModal from './SearchModal'
import CurrentWeather from './CurrentWeather'
import WeatherSegment from './WeatherSegment'
import WeatherCard from './WeatherCard'
import WeatherDetails from './WeatherDetails'
// Functions
import { syncTheme, getCityInfo } from '../functions/helper'


dayjs.locale('zh-tw')   // 設定語系

class App extends React.Component {
    state = {
        isModalOpen: false,
        isLoading: true,
        somethingWrong: false,
        icon: '',
        summary: '',
        temperature: undefined,
        reminder: '',
        hourlyData: [],
        dailyData: [],
        details: {}
    }
    async componentDidMount() {
        const { pathname } = this.props.location
        const coordinates = (pathname.length > 1) ?
            getCityInfo(pathname.replace(/\//g, '')).coords :
            '25.038062,121.564448'  // 臺北市座標
        const prefix = '//cors-anywhere.herokuapp.com'
        const base = 'https://api.darksky.net/forecast'
        const key = process.env.REACT_APP_DARK_SKY_KEY
        const suffix = 'lang=zh-tw&units=si&exclude=flags'
        const darkSkyUrl = `${prefix}/${base}/${key}/${coordinates}?${suffix}`

        try {
            const resp = await fetch(darkSkyUrl)
            const data = await resp.json()
            const { currently, hourly, daily } = data

            // 每小時預報資料
            const hourlyData = []
            for (let item of hourly.data) {
                hourlyData.push({
                    time: item.time,
                    chanceOfRain: item.precipProbability,
                    icon: item.icon,
                    temperature: item.temperature
                })
            }

            // 一週天氣預報
            const dailyData = []
            for (let item of daily.data) {
                dailyData.push({
                    time: item.time,
                    icon: item.icon,
                    maxTemp: item.temperatureMax,
                    minTemp: item.temperatureMin
                })
            }

            // 其他天氣資料
            const today = daily.data[0]
            const details = {
                sunriseTime: today.sunriseTime,
                sunsetTime: today.sunsetTime,
                chanceOfRain: today.precipProbability,
                humidity: today.humidity,
                wind: `${today.windBearing},${today.windSpeed}`,
                apparentTemperature: currently.apparentTemperature,
                rainAmount: today.precipIntensity,
                pressure: today.pressure,
                visibility: today.visibility,
                uvIndex: today.uvIndex
            }

            // 更新狀態
            this.setState({
                isLoading: false,
                somethingWrong: false,
                icon: currently.icon,
                summary: currently.summary,
                temperature: currently.temperature,
                reminder: daily.summary,
                hourlyData,
                dailyData,
                details
            })
        } catch(err) {
            console.log(err)
            this.setState({isLoading: false, somethingWrong: true})
        }
    }
    handleOpenModal = () => {
        this.setState({ isModalOpen: true })
    }
    handleCloseModal = () => {
        this.setState({ isModalOpen: false })
    }
    render() {
        const {
            isLoading,
            somethingWrong,
            isModalOpen,
            icon,
            summary,
            temperature,
            reminder,
            hourlyData,
            dailyData,
            details
        } = this.state

        const { pathname } = this.props.location
        const cityName = (pathname.length > 1) ?
            getCityInfo(pathname.replace(/\//g, '')).name :
            '臺北市'

        return somethingWrong ? <Error />
            : isLoading ? <Loading />
            : (
            <div
                className="background-overlay"
                style={{
                    '--theme-color': syncTheme(icon),
                    height: isModalOpen && '100vh',
                    overflow: isModalOpen && 'auto'
                }}
            >
                {isModalOpen && (
                    <SearchModal
                        isOpen={isModalOpen}
                        handleCloseModal={this.handleCloseModal}
                    />
                )}
                <div className="app-container">
                    <CurrentWeather
                        location={cityName}
                        summary={summary}
                        temperature={temperature}
                        handleOpenModal={this.handleOpenModal}
                    />
                    <div className="hourly-forecast">
                        <WeatherSegment
                            time={dailyData[0].time}
                            note="今天"
                            maxTemp={dailyData[0].maxTemp}
                            minTemp={dailyData[0].minTemp}
                            className="weather-segment--displaying"
                        />
                        <div className="cards-container">
                            {hourlyData.map(item => (
                                <WeatherCard
                                    key={item.time}
                                    time={item.time}
                                    chanceOfRain={item.chanceOfRain}
                                    icon={item.icon}
                                    temperature={item.temperature}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="daily-forecast">
                        {dailyData.map(item =>
                            dayjs().isSame(dayjs.unix(item.time), 'date') ?
                                null : (
                                <WeatherSegment
                                    key={item.time}
                                    time={item.time}
                                    icon={item.icon}
                                    maxTemp={item.maxTemp}
                                    minTemp={item.minTemp}
                                />
                            )
                        )}
                    </div>
                    <p className="reminder">{reminder.replace(/周/g, '週')}</p>
                    <WeatherDetails data={details} />
                </div>
            </div>
        )
    }
}

export default App

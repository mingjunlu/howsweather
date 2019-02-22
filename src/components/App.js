import React from 'react'
import IconWrapper from './shared/IconWrapper'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import Error from './Error'
import Loading from './Loading'
import Details from './Details'
import { weatherToIcon } from '../functions/helper.js'


dayjs.locale('zh-tw')   // 設定語系
const prefix = '//cors-anywhere.herokuapp.com'
const base = 'https://api.darksky.net/forecast'
const key = process.env.REACT_APP_DARK_SKY_KEY
const coordinates = '25.038062,121.564448'  // 臺北市
const suffix = 'lang=zh-tw&units=si&exclude=flags'
const darkSkyUrl = `${prefix}/${base}/${key}/${coordinates}?${suffix}`

class App extends React.Component {
    state = {
        isLoading: true,
        somethingWrong: false,
        summary: '',
        temperature: undefined,
        reminder: '',
        hourlyData: [],
        dailyData: [],
        details: {}
    }
    async componentDidMount() {
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
    render() {
        const {
            isLoading,
            somethingWrong,
            summary,
            temperature,
            reminder,
            hourlyData,
            dailyData,
            details
        } = this.state
        return somethingWrong ? <Error />
            : isLoading ? <Loading />
            : (
            <div className="app-container">
                <div className="current">
                    <p className="current__location">臺北市</p>
                    <p className="current__summary">{summary}</p>
                    <p className="current__temperature">
                        {Math.round(temperature)}
                    </p>
                </div>
                <div className="hourly-forecast">
                    <div className={ 'weather-segment' +
                        ' weather-segment--displaying'
                    }>
                        <p className="weather-segment__day">
                            <span>{dayjs.unix(dailyData[0].time).format('dddd')}</span>
                            <span className="weather-segment__date">今天</span>
                        </p>
                        <p className="weather-segment__temp">
                            <span>{Math.round(dailyData[0].maxTemp)}</span>
                            <span className="weather-segment__min-temp">
                                {Math.round(dailyData[0].minTemp)}
                            </span>
                        </p>
                    </div>
                    <div className="cards-container">
                        {hourlyData.map(item => (
                            <div key={item.time} className="weather-card">
                            <p className="weather-card__time">
                                {dayjs().isSame(dayjs.unix(item.time), 'hour') ?
                                    '現在' :
                                    new Date(item.time * 1000)
                                        .toLocaleTimeString()
                                        .slice(0, 3) + '時'
                                }
                            </p>
                            <p
                                className="weather-card__pop"
                                style={{ visibility: item.chanceOfRain < 0.05 ?
                                    'hidden' : 'visible'
                                }}
                            >
                                {`${Math.round(item.chanceOfRain * 10) * 10}%`}
                            </p>
                            <IconWrapper
                                icon={weatherToIcon(item.icon)}
                                className="weather-card__icon"
                            />
                            <p className="weather-card__temp">
                                {`${Math.round(item.temperature)}°`}
                            </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="daily-forecast">
                    {dailyData.map(item =>
                        dayjs().isSame(dayjs.unix(item.time), 'date') ?
                            null : (
                            <div key={item.time} className="weather-segment">
                                <p>{dayjs.unix(item.time).format('dddd')}</p>
                                <IconWrapper
                                    icon={weatherToIcon(item.icon)}
                                    className="weather-segment__icon"
                                />
                                <p className="weather-segment__temp">
                                    <span>{Math.round(item.maxTemp)}</span>
                                    <span className="weather-segment__min-temp">
                                        {Math.round(item.minTemp)}
                                    </span>
                                </p>
                            </div>
                        )
                    )}
                </div>
                <p className="reminder">{reminder.replace(/周/g, '週')}</p>
                <Details data={details} />
            </div>
        )
    }
}

export default App

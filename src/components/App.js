// Libraries
import React from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
// Components
import Error from './shared/Error'
import Loading from './shared/Loading'
import SearchModal from './SearchModal'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import Reminder from './Reminder'
import WeatherDetails from './WeatherDetails'
import Footer from './Footer'
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
        hourlyData: [],
        dailyData: [],
        details: {}
    }
    async componentDidMount() {
        const { pathname } = this.props.location
        const coordinates = (pathname.length > 1) ?
            getCityInfo(pathname.replace(/\//g, '')).coords :
            '25.038062,121.564448'  // 臺北市座標
        const url = `/.netlify/functions/weather?loc=${coordinates}`

        try {
            const resp = await axios.get(url)
            const { currently, hourly, daily, details } = resp.data

            // 更新狀態
            this.setState({
                isLoading: false,
                somethingWrong: false,
                icon: currently.icon,
                summary: currently.summary,
                temperature: currently.temperature,
                hourlyData: hourly,
                dailyData: daily,
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
                <div className="app-container animated fadeIn fast">
                    <CurrentWeather
                        location={cityName}
                        summary={summary}
                        temperature={temperature}
                        handleOpenModal={this.handleOpenModal}
                    />
                    <HourlyForecast
                        today={dailyData[0]}
                        hourlyData={hourlyData}
                    />
                    <DailyForecast dailyData={dailyData} />
                    <Reminder
                        cityName={cityName}
                        summary={summary}
                        temperature={temperature}
                        minTemp={dailyData[0].minTemp}
                        maxTemp={dailyData[0].maxTemp}
                        chanceOfRain={details.chanceOfRain}
                    />
                    <WeatherDetails data={details} />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App

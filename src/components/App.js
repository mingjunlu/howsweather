// Libraries
import React from 'react'
import axios from 'axios'
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
// Utilities
import syncTheme from '../utils/syncTheme'
import * as locations from '../utils/locations.json'

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
        const location = locations.default
            .find(loc => loc.path.replace(/\//g, '') === pathname.replace(/\//g, ''))
        const coordinates = (pathname.length > 1 && location)
            ? location.coords
            : '25.038062,121.564448'  // 臺北市座標
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
            this.setState({ isLoading: false, somethingWrong: true })
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
        const location = pathname === '/'
            ? { name: '臺北市' }
            : locations.default
                .find(loc => loc.path.replace(/\//g, '') === pathname.replace(/\//g, ''))

        if (somethingWrong) return <Error />
        else if (isLoading) return <Loading />
        else {
            return (
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
                            location={location.name}
                            summary={summary}
                            temperature={temperature}
                            handleOpenModal={this.handleOpenModal}
                        />
                        <HourlyForecast today={dailyData[0]} hourlyData={hourlyData} />
                        <DailyForecast dailyData={dailyData} />
                        <Reminder
                            location={location.name}
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
}

export default App

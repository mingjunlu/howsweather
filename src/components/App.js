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
        const { geolocation } = this.props
        const coordinates = geolocation.coords || '25.038062,121.564448' // 預設臺北市
        const url = `/.netlify/functions/weather?loc=${coordinates}`
        try {
            const resp = await axios.get(url)
            const { currently, hourly, daily, details } = resp.data
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
        window.scroll(0, 0) // 回到頁面頂端
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
        const { geolocation } = this.props

        if (somethingWrong) return <Error />
        else if (isLoading) return <Loading />
        else {
            return (
                <div
                    className="background-overlay"
                    style={{ '--theme-color': isModalOpen ? 'rgb(81, 101, 117)' : syncTheme(icon) }}
                >
                    {isModalOpen ? (
                        <SearchModal
                            isOpen={isModalOpen}
                            handleCloseModal={this.handleCloseModal}
                        />
                    ) : (
                        <div className="app-container animated fadeIn fast">
                            <CurrentWeather
                                location={geolocation.name}
                                summary={summary}
                                temperature={temperature}
                                handleOpenModal={this.handleOpenModal}
                            />
                            <HourlyForecast today={dailyData[0]} hourlyData={hourlyData} />
                            <DailyForecast dailyData={dailyData} />
                            <Reminder
                                location={geolocation.name}
                                summary={summary}
                                temperature={temperature}
                                minTemp={dailyData[0].minTemp}
                                maxTemp={dailyData[0].maxTemp}
                                chanceOfRain={details.chanceOfRain}
                            />
                            <WeatherDetails data={details} />
                            <Footer />
                        </div>
                    )}
                </div>
            )
        }
    }
}

export default App

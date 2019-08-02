import React from 'react'
import { WeatherContext } from '../CentralStore'
import WeatherEffectLayer from './WeatherEffectLayer'
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
        isModalOpen: false
    }
    handleOpenModal = () => {
        this.setState({ isModalOpen: true })
    }
    handleCloseModal = () => {
        this.setState({ isModalOpen: false })
        window.scroll(0, 0) // 回到頁面頂端
    }
    render() {
        const { isModalOpen } = this.state
        return (
            <WeatherContext.Consumer>
                {({ icon }) => (
                    <div
                        className="background-overlay"
                        style={{ '--theme-color': isModalOpen
                            ? 'rgb(81, 101, 117)'
                            : syncTheme(icon)
                        }}
                    >
                        {isModalOpen ? (
                            <SearchModal
                                isOpen={isModalOpen}
                                handleCloseModal={this.handleCloseModal}
                            />
                        ) : (
                            <React.Fragment>
                                <WeatherEffectLayer />
                                <div className="app-container animated fadeIn fast">
                                    <CurrentWeather handleOpenModal={this.handleOpenModal} />
                                    <HourlyForecast />
                                    <DailyForecast />
                                    <Reminder />
                                    <WeatherDetails />
                                    <Footer />
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                )}
            </WeatherContext.Consumer>
        )
    }
}

export default App

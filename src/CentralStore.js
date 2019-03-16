import React from 'react'
import axios from 'axios'
import App from './components/App'
import Error from './components/shared/Error'
import Loading from './components/shared/Loading'

const WeatherContext = React.createContext()

class CentralStore extends React.Component {
    state = {
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
    render() {
        const {
            isLoading,
            somethingWrong,
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
                <WeatherContext.Provider value={{
                    icon,
                    summary,
                    temperature,
                    hourlyData,
                    dailyData,
                    details,
                    geolocation
                }}>
                    <App />
                </WeatherContext.Provider>
            )
        }
    }
}

export { CentralStore as default, WeatherContext }

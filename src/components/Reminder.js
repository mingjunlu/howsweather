import React from 'react'
import { WeatherContext } from '../CentralStore'

const Reminder = ({ location }) => (
    <WeatherContext.Consumer>
        {({ geolocation, summary, temperature, hourlyData, dailyData }) => (
            <p className="reminder">
                {`${geolocation.name}目前${summary}，氣溫 ${Math.round(temperature)} 度。預計今日溫度介於 ${Math.round(dailyData[0].minTemp)} 到 ${Math.round(dailyData[0].maxTemp)} 度之間，降雨機率約 ${hourlyData[0].chanceOfRain}%。`}
            </p>
        )}
    </WeatherContext.Consumer>
)

export default Reminder

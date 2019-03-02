import React from 'react'
import WeatherSegment from './WeatherSegment'
import WeatherCard from './WeatherCard'

const HourlyForecast = ({ today, hourlyData }) => (
    <div className="hourly-forecast">
        <WeatherSegment
            time={today.time}
            note="今天"
            maxTemp={today.maxTemp}
            minTemp={today.minTemp}
            className="weather-segment--displaying"
        />
        <div className="cards-container">
            {hourlyData.map(hour => (
                <WeatherCard
                    key={hour.time}
                    time={hour.time}
                    chanceOfRain={hour.chanceOfRain}
                    icon={hour.icon}
                    temperature={hour.temperature}
                />
            ))}
        </div>
    </div>
)

export default HourlyForecast

import React from 'react'
import { WeatherContext } from '../CentralStore'
import WeatherSegment from './WeatherSegment'
import WeatherCard from './WeatherCard'

const HourlyForecast = () => (
    <WeatherContext.Consumer>
        {({ hourlyData, dailyData }) => (
            <div className="hourly-forecast">
                <WeatherSegment
                    className="weather-segment--displaying"
                    note="今天"
                    time={dailyData[0].time}
                    maxTemp={dailyData[0].maxTemp}
                    minTemp={dailyData[0].minTemp}
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
        )}
    </WeatherContext.Consumer>
)

export default HourlyForecast

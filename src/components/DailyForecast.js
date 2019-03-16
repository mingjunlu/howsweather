import React from 'react'
import { WeatherContext } from '../CentralStore'
import WeatherSegment from './WeatherSegment'

const DailyForecast = () => (
    <WeatherContext.Consumer>
        {({ dailyData }) => (
            <div className="daily-forecast">
                {dailyData.slice(1).map(day => (
                    <WeatherSegment
                        key={day.time}
                        time={day.time}
                        icon={day.icon}
                        maxTemp={day.maxTemp}
                        minTemp={day.minTemp}
                    />
                ))}
            </div>
        )}
    </WeatherContext.Consumer>
)

export default DailyForecast

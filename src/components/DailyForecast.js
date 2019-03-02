import React from 'react'
import WeatherSegment from './WeatherSegment'

const DailyForecast = ({ dailyData }) => (
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
)

export default DailyForecast

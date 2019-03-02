import React from 'react'

const Reminder = ({
    cityName,
    summary,
    temperature,
    minTemp,
    maxTemp,
    chanceOfRain
}) => (
    <p className="reminder">
        {`${cityName}目前${summary}，氣溫 ` +
            `${Math.round(temperature)} 度。預計今日溫度介於 ` +
            `${Math.round(minTemp)} 到 ` +
            `${Math.round(maxTemp)} 度之間，` +
            `降雨機率約 ${chanceOfRain}%。`
        }
    </p>
)

export default Reminder

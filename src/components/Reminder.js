import React from 'react'

const Reminder = ({
    location,
    summary,
    temperature,
    minTemp,
    maxTemp,
    chanceOfRain
}) => (
    <p className="reminder">
        {`${location}目前${summary}，氣溫 ${Math.round(temperature)} 度。預計今日溫度介於 ${Math.round(minTemp)} 到 ${Math.round(maxTemp)} 度之間，降雨機率約 ${chanceOfRain}%。`}
    </p>
)

export default Reminder

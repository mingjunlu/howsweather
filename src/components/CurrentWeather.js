import React from 'react'

const CurrentWeather = ({
    location='天氣',
    summary='',
    temperature=null
}) => (
    <div className="current">
        <p className="current__location">{location}</p>
        <p className="current__summary">{summary}</p>
        <p className="current__temperature">
            {Math.round(temperature)}
        </p>
    </div>
)

export default CurrentWeather

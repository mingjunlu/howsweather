import React from 'react'
import IconWrapper from './shared/IconWrapper'

const CurrentWeather = ({
    location='天氣',
    summary='',
    temperature=null
}) => (
    <div className="current">
        <div className="current__location">
            <IconWrapper
                icon="caret-square-down"
                style={{ fontSize: '0.35em', visibility: 'hidden' }}
            />
            <label
                htmlFor="city-name-input"
                style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <span style={{ padding: '0 0.2rem' }}>{location}</span>
                <IconWrapper
                    icon="caret-square-down"
                    style={{ fontSize: '0.35em', alignSelf: 'center' }}
                />
            </label>
        </div>
        <p className="current__summary">{summary}</p>
        <p className="current__temperature">
            {Math.round(temperature)}
        </p>
    </div>
)

export default CurrentWeather

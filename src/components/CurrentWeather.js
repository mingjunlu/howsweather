import React from 'react'
import { WeatherContext } from '../CentralStore'
import IconWrapper from './shared/IconWrapper'

const CurrentWeather = ({ handleOpenModal }) => (
    <WeatherContext.Consumer>
        {({ geolocation, summary, temperature }) => (
            <div className="current">
                <div className="current__location">
                    <div className="current__location-wrapper" onClick={handleOpenModal}>
                        <span>{geolocation.name}</span>
                        <IconWrapper icon="search" className="location-wrapper__icon" />
                    </div>
                </div>
                <p className="current__summary">{summary}</p>
                <p className="current__temperature">{Math.round(temperature)}</p>
            </div>
        )}
    </WeatherContext.Consumer>
)

export default CurrentWeather

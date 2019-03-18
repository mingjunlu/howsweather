import React from 'react'
import { WeatherContext } from '../CentralStore'
import withUnits from '../utils/withUnits'

const WeatherDetails = () => (
    <WeatherContext.Consumer>
        {({ details }) => (
            <div className="details">
                {withUnits(details).map(({ engTag, tag, text }) => (
                    <p key={engTag} className="details__segment">
                        <span className="details__tag">{tag}</span>
                        <span className="details__text">{text}</span>
                    </p>
                ))}
            </div>
        )}
    </WeatherContext.Consumer>
)

export default WeatherDetails

import React from 'react'
import { withUnits } from '../functions/helper'

const WeatherDetails = ({ data }) =>  (
    <div className="details">
        {withUnits(data).map(({ engTag, tag, text }) => (
            <p key={engTag} className="details__segment">
                <span className="details__tag">{tag}</span>
                <span className="details__text">{text}</span>
            </p>
        ))}
    </div>
)

export default WeatherDetails

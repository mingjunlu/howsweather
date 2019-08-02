import React from 'react'
import { WeatherContext } from '../CentralStore'
import RainEffect from './RainEffect'

const WeatherEffectLayer = () => (
    <WeatherContext.Consumer>
        {({ icon }) => {
            switch(icon) {
                case 'rain':
                    return (
                        <div className="weather-effect-layer">
                            <RainEffect />
                        </div>
                    )
                default:
                    return null
            }
        }}
    </WeatherContext.Consumer>
)

export default WeatherEffectLayer

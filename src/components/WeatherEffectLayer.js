import React from 'react'
import { WeatherContext } from '../CentralStore'
import RainEffect from './RainEffect'
import CloudEffect from './CloudEffect'
import StarEffect from './StarEffect'

const WeatherEffectLayer = () => (
    <WeatherContext.Consumer>
        {({ icon }) => {
            switch(icon) {
                case 'rain':
                    return <RainEffect />
                case 'clear-night':
                    return <StarEffect />
                case 'cloudy':
                case 'partly-cloudy-day':
                case 'partly-cloudy-night':
                    return <CloudEffect />
                default:
                    return null
            }
        }}
    </WeatherContext.Consumer>
)

export default WeatherEffectLayer

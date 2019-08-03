import React from 'react'
import { WeatherContext } from '../CentralStore'
import RainEffect from './RainEffect'
import CloudEffect from './CloudEffect'

const WeatherEffectLayer = () => (
    <WeatherContext.Consumer>
        {({ icon }) => {
            switch(icon) {
                case 'rain':
                    return <RainEffect />
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

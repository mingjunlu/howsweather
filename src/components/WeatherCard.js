import React from 'react'
import IconWrapper from './shared/IconWrapper'
import dayjs from 'dayjs'
import weatherToIcon from '../utils/weatherToIcon'

const WeatherCard = ({
    time=null,
    chanceOfRain=0,
    icon=null,
    temperature=null
}) => (
    <div className="weather-card">
        <p className="weather-card__time">
            {dayjs().isSame(dayjs(time), 'hour')
                ? '現在'
                : dayjs(time).format('Ah時').replace('AM', '上午').replace('PM', '下午')
            }
        </p>
        <p
            className="weather-card__pop"
            style={{ visibility: chanceOfRain > 0 ? 'visible' : 'hidden' }}
        >
            {`${chanceOfRain}%`}
        </p>
        <IconWrapper icon={weatherToIcon(icon)} className="weather-card__icon" />
        <p className="weather-card__temp">{`${Math.round(temperature)}°`}</p>
    </div>
)

export default WeatherCard

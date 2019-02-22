import React from 'react'
import IconWrapper from './shared/IconWrapper'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import { weatherToIcon } from '../functions/helper.js'

dayjs.locale('zh-tw')   // 設定語系

const WeatherCard = ({
    time=null,
    chanceOfRain=0,
    icon=null,
    temperature=null
}) => (
    <div className="weather-card">
        <p className="weather-card__time">
            {dayjs().isSame(dayjs.unix(time), 'hour') ?
                '現在' :
                new Date(time * 1000)
                    .toLocaleTimeString()
                    .slice(0, 3) + '時'
            }
        </p>
        <p
            className="weather-card__pop"
            style={{ visibility: chanceOfRain < 0.05 ?
                'hidden' : 'visible'
            }}
        >
            {`${Math.round(chanceOfRain * 10) * 10}%`}
        </p>
        <IconWrapper
            icon={weatherToIcon(icon)}
            className="weather-card__icon"
        />
        <p className="weather-card__temp">
            {`${Math.round(temperature)}°`}
        </p>
    </div>
)

export default WeatherCard

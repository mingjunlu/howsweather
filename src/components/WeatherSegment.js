import React from 'react'
import IconWrapper from './shared/IconWrapper'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import { weatherToIcon } from '../functions/helper.js'

dayjs.locale('zh-tw')   // 設定語系

const WeatherSegment = ({
    time=null,
    note='',
    icon=null,
    maxTemp=null,
    minTemp=null,
    className=''
}) => (
    <div className={`weather-segment ${className}`.trim()}>
        <p className="weather-segment__day">
            <span>{dayjs.unix(time).format('dddd')}</span>
            {note && <span className="weather-segment__date">今天</span>}
        </p>
        {icon && (
            <IconWrapper
                icon={weatherToIcon(icon)}
                className="weather-segment__icon"
            />)
        }
        <p className="weather-segment__temp">
            <span>{Math.round(maxTemp)}</span>
            <span className="weather-segment__min-temp">
                {Math.round(minTemp)}
            </span>
        </p>
    </div>
)

export default WeatherSegment

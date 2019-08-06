import React from 'react'
import Footer from '../Footer'
import syncTheme from '../../utils/syncTheme'
import weatherToIcon from '../../utils/weatherToIcon'
import withUnits from '../../utils/withUnits'
import IconWrapper from './IconWrapper'

const fakeDetails = {
    apparentTemperature: 99,
    chanceOfRain: 99,
    humidity: 99,
    pressure: 9999.99,
    rainAmount: 0.0999,
    sunriseTime: 1565040284000,
    sunsetTime: 1565087838000,
    uvIndex: 99,
    visibility: 99.999,
    wind: "78,9.99"
}

const Loading = () => (
    <div className="background-overlay" style={{ '--theme-color': syncTheme() }}>
        <div className="app-container animated fadeIn fast">
            <div className="current">
                <div className="current__location">
                    <div className="current__location-wrapper">
                        <span className="invisible">請稍候</span>
                    </div>
                </div>
                <p className="current__summary invisible">天氣概況</p>
                <p className="current__temperature current__temperature--fake">--</p>
            </div>
            <div className="hourly-forecast">
                <div className="weather-segment weather-segment--displaying invisible">
                    <p className="weather-segment__day">
                        <span>星期</span>
                        <span className="weather-segment__date">今天</span>
                    </p>
                    <p className="weather-segment__temp">
                        <span>00</span>
                        <span className="weather-segment__min-temp">99</span>
                    </p>
                </div>
                <div className="cards-container">
                    <div className="weather-card invisible">
                        <p className="weather-card__time">時間</p>
                        <p className="weather-card__pop">0%</p>
                        <IconWrapper icon={weatherToIcon()} className="weather-card__icon" />
                        <p className="weather-card__temp">99°</p>
                    </div>
                </div>
            </div>
            <div className="daily-forecast">
                {[...Array(7)].map(() => (
                    <div className="weather-segment invisible" key={Math.random().toString()}>
                        <p className="weather-segment__day">
                            <span>星期</span>
                        </p>
                        <p className="weather-segment__temp">
                            <span>00</span>
                            <span className="weather-segment__min-temp">99</span>
                        </p>
                    </div>
                ))}
            </div>
            <p className="reminder">
                <span className="invisible">此地區目前多雲，氣溫 99 度。預計今日溫度介於 00 到 99 度之間，降雨機率約 99%。</span>
            </p>
            <div className="details">
                {withUnits(fakeDetails).map(({ engTag, tag, text }) => (
                    <p key={engTag} className="details__segment">
                        <span className="details__tag">{tag}</span>
                        <span className="details__text">
                            <span className="invisible">{text}</span>
                        </span>
                    </p>
                ))}
            </div>
            <Footer />
        </div>
    </div>
)

export default Loading

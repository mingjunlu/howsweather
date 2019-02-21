import React from 'react'
import IconWrapper from './IconWrapper'

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <div className="current">
                    <p className="current__location">臺北市</p>
                    <p className="current__summary">局部多雲</p>
                    <p className="current__temperature">24</p>
                </div>
                <div>
                    <div className={ 'weather-segment' +
                        ' weather-segment--displaying'
                    }>
                        <p className="weather-segment__day">
                            <span>星期四</span>
                            <span className="weather-segment__date">今天</span>
                        </p>
                        <p className="weather-segment__temp">
                            <span>24</span>
                            <span className="weather-segment__min-temp">17</span>
                        </p>
                    </div>
                    <div className="hourly-forecast">
                        {[...Array(24).keys()].map(() => (
                            <div key={Math.random()} className="weather-card">
                            <p className="weather-card__time">下午3時</p>
                            <p className="weather-card__pop"
                                style={{ visibility: Math.random() < 0.5 ?
                                    'hidden' : 'visible'
                                }}
                            >40%</p>
                            <IconWrapper
                                icon="cloud-sun"
                                className="weather-card__icon"
                            />
                            <p className="weather-card__temp">19°</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="weekly-forecast">
                    {[...Array(6).keys()].map(() => (
                        <div key={Math.random()} className="weather-segment">
                            <p>星期四</p>
                            <IconWrapper
                                icon="cloud-sun"
                                className="weather-segment__icon"
                            />
                            <p className="weather-segment__temp">
                                <span>21</span>
                                <span className="weather-segment__min-temp">16</span>
                            </p>
                        </div>
                    ))}
                </div>
                <p className="reminder">
                    今天：目前多雲時陰。氣溫 21°；今天預測最高溫 24°。
                </p>
                <div className="details">
                    <p className="details__segment">
                        <span className="details__tag">日出</span>
                        <span className="details__text">上午6:22</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">日落</span>
                        <span className="details__text">下午5:50</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">降雨機率</span>
                        <span className="details__text">30%</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">濕度</span>
                        <span className="details__text">89%</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">風</span>
                        <span className="details__text">東 6 公尺/秒</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">體感溫度</span>
                        <span className="details__text">21°</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">降雨量</span>
                        <span className="details__text">0 公分</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">氣壓</span>
                        <span className="details__text">1016 百帕</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">能見度</span>
                        <span className="details__text">9.7公里</span>
                    </p>
                    <p className="details__segment">
                        <span className="details__tag">紫外線指數</span>
                        <span className="details__text">0</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default App

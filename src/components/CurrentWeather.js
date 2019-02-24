import React from 'react'
import IconWrapper from './shared/IconWrapper'

class CurrentWeather extends React.Component {
    render() {
        const {
            location='天氣',
            summary='',
            temperature=null,
            handleOpenModal
        } = this.props
        return (
            <div className="current">
                <div className="current__location">
                    <div
                        className="current__city-wrapper"
                        onClick={handleOpenModal}
                    >
                        <span>{location}</span>
                        <IconWrapper
                            icon="search"
                            className="city-wrapper__icon"
                        />
                    </div>
                </div>
                <p className="current__summary">{summary}</p>
                <p className="current__temperature">
                    {Math.round(temperature)}
                </p>
            </div>
        )
    }
}

export default CurrentWeather

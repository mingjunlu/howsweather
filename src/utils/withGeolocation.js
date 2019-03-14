import React from 'react'
import nearestLocation from './nearestLocation'

// 回傳加上地點資訊的 Component
const withGeolocation = (Component, props) => {
    const coords = props.location.state
        ? props.location.state.coords
        : '25.038062,121.564448'    // 預設顯示臺北市天氣
    const bestGuess = nearestLocation(coords)
    return <Component {...props} key={props.location.key} geolocation={bestGuess} />
}

export default withGeolocation

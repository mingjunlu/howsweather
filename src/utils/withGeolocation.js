import React from 'react'
import nearestLocation from './nearestLocation'
import * as locations from './locations.json'

// 回傳加上地點資訊的 Component
const withGeolocation = (Component, props) => {
    let coords
    if (props.location.state) { coords = props.location.state.coords }
    else if (props.location.pathname === '/') { coords = '25.038062,121.564448' }
    else {
        const matchedPath = locations.default.find(loc => loc.path === `/${props.match.params[0]}/`)
        if (matchedPath) { coords = matchedPath.coords }
    }
    const bestGuess = nearestLocation(coords)
    return <Component {...props} key={props.location.key} geolocation={bestGuess} />
}

export default withGeolocation

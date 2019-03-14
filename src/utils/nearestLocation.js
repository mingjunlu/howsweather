import * as locations from './locations.json'

const nearestLocation = (coords) => {
    const [lat, lon] = coords.split(',')
    let min, location

    for (let loc of locations.default) {
        if (loc.coords === coords) return loc   // 座標完全符合就直接回傳地點

        const [x, y] = loc.coords.split(',')
        const distance = Math.sqrt(Math.pow(lat - x, 2) + Math.pow(lon - y, 2))
        if (!min || distance < min) {
            min = distance
            location = loc
        }
    }
    return location
}

export default nearestLocation

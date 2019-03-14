const getPosition = (settings) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            // 成功取得座標
            const { coords: {latitude, longitude} } = pos
            resolve(`${latitude},${longitude}`)
        }, (err) => {
            // 無法取得座標
            reject(err)
        }, settings)
    })
}

export default getPosition

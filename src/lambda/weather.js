const axios = require('axios')

exports.handler = function(event, context, callback) {
    const { queryStringParameters, httpMethod } = event

    let { API_URL, API_KEY, API_SUFFIX } = process.env
    // 測試階段從 .env.development.local 拿金鑰
    if (!API_URL && !API_KEY && !API_SUFFIX) {
        API_URL = process.env.REACT_APP_API_URL
        API_KEY = process.env.REACT_APP_API_KEY
        API_SUFFIX = process.env.REACT_APP_API_SUFFIX
    }

    if (!queryStringParameters.loc) {
        // 檢查有沒有提供座標
        callback('Invalid Format')
    } else if (httpMethod === 'GET') {
        // 只接受 GET requests
        const { loc } = queryStringParameters
        const url = `${API_URL}/${API_KEY}/${loc}?${API_SUFFIX}`

        // 呼叫 API
        axios.get(url)
            .then(resp => {
                const { currently, hourly, daily } = resp.data

                // 目前天氣
                const currentData = {
                    icon: currently.icon,
                    summary: currently.summary,
                    temperature: currently.temperature
                }

                // 每小時預報資料
                const hourlyData = []
                for (let item of hourly.data.slice(0, 25)) {
                    hourlyData.push({
                        time: item.time * 1000,
                        chanceOfRain: Math.round(item.precipProbability * 10) * 10,
                        icon: item.icon,
                        temperature: item.temperature
                    })
                }

                // 一週天氣預報
                const dailyData = []
                for (let item of daily.data) {
                    dailyData.push({
                        time: item.time * 1000,
                        icon: item.icon,
                        maxTemp: item.temperatureMax,
                        minTemp: item.temperatureMin
                    })
                }

                // 其他天氣資料
                const today = daily.data[0]
                const details = {
                    sunriseTime: today.sunriseTime * 1000,
                    sunsetTime: today.sunsetTime * 1000,
                    chanceOfRain: Math.round(today.precipProbability * 10) * 10,
                    humidity: Math.round(today.humidity * 100),
                    wind: `${today.windBearing},${today.windSpeed}`,
                    apparentTemperature: currently.apparentTemperature,
                    rainAmount: today.precipIntensity,
                    pressure: today.pressure,
                    visibility: today.visibility,
                    uvIndex: today.uvIndex
                }

                // 整理乾淨的資料
                const response = {
                    currently: currentData,
                    hourly: hourlyData,
                    daily: dailyData,
                    details
                }

                // 回傳 JSON
                callback(null, {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify(response)
                })
            })
            .catch(err => {
                const { statusText } = err.response
                const { code, error } = err.response.data
                const message = `${code} ${statusText} - ${error}`
                console.log('[For debugging] ' + message)
                callback(error)
            })
    }
}

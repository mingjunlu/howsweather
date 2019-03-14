import dayjs from 'dayjs'

const withUnits = (obj) => {
    return Object.keys(obj).map(key => {
        switch(key) {
            case 'sunriseTime':
                return {
                    engTag: key,
                    tag: '日出',
                    text: dayjs(obj[key]).format('A h:mm').replace('AM', '上午')
                }
            case 'sunsetTime':
                return {
                    engTag: key,
                    tag: '日落',
                    text: dayjs(obj[key]).format('A h:mm').replace('PM', '下午')
                }
            case 'chanceOfRain':
                return {
                    engTag: key,
                    tag: '降雨機率',
                    text: `${obj[key]}%`
                }
            case 'humidity':
                return {
                    engTag: key,
                    tag: '濕度',
                    text: `${obj[key]}%`
                }
            case 'wind':
                const arr = obj[key].split(',')
                return {
                    engTag: key,
                    tag: '風',
                    text: (() => {
                        if (arr[0] > 337 || arr[0] < 23) {return '北'}
                        else if (arr[0] < 67) {return '東北'}
                        else if (arr[0] < 113) {return '東'}
                        else if (arr[0] < 157) {return '東南'}
                        else if (arr[0] < 201) {return '南'}
                        else if (arr[0] < 248) {return '西南'}
                        else if (arr[0] < 293) {return '西'}
                        else {return '西北'}
                    })() + ` ${Math.round(arr[1])} 公尺 / 秒`
                }
            case 'apparentTemperature':
                return {
                    engTag: key,
                    tag: '體感溫度',
                    text: `${Math.round(obj[key])}°`
                }
            case 'rainAmount':
                return {
                    engTag: key,
                    tag: '降雨量',
                    text: `${parseFloat(obj[key].toFixed(1))} 公分`
                }
            case 'pressure':
                return {
                    engTag: key,
                    tag: '氣壓',
                    text: `${Math.round(obj[key])} 百帕`
                }
            case 'visibility':
                return {
                    engTag: key,
                    tag: '能見度',
                    text: `${parseFloat(obj[key].toFixed(1))} 公里`
                }
            case 'uvIndex':
                return {
                    engTag: key,
                    tag: '紫外線指數',
                    text: obj[key]
                }
            default:
                return {
                    engTag: key,
                    tag: key,
                    text: obj[key]
                }
        }
    })
}

export default withUnits

import dayjs from 'dayjs'
dayjs.locale('zh-tw')   // 設定語系

const weatherToIcon = (description) => {
    switch (description) {
        case 'clear-day':
            return 'sun'
        case 'clear-night':
            return 'moon'
        case 'partly-cloudy-day':
            return 'cloud-sun'
        case 'partly-cloudy-night':
            return 'cloud-moon'
        case 'fog':
            return 'smog'
        case 'cloudy':
            return 'cloud'
        case 'rain':
            return 'cloud-showers-heavy'
        case 'wind':
            return 'wind'
        case 'snow':
            return 'snowflake'
        default:
            return 'question-circle'
    }
}

const withUnits = (obj) => {
    return Object.keys(obj).map(key => {
        switch (key) {
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
                    text: dayjs(obj[key]).format('A h:mm').replace('PM', '上午')
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

const syncTheme = (description) => {
    const lightTheme = 'linear-gradient(345deg, ' +
    'rgba(85, 165, 200, 0.85) 0%, rgba(35, 130, 190, 0.8) 40%)'
    const darkTheme = 'linear-gradient(170deg, ' +
    'rgba(124, 133, 134, 1) 0%, rgba(81, 101, 117, 1) 45%)'
    if (!description) {return lightTheme}
    switch (description) {
        case 'clear-day':
        case 'partly-cloudy-day':
        case 'cloudy':
            return lightTheme
        default:
            return darkTheme
    }
}

const cityList = [
    {
        name: '基隆市',
        engName: 'keelung',
        coords: '25.131645,121.744651'
    },
    {
        name: '臺北市',
        engName: 'taipei',
        coords: '25.038062,121.564448'
    },
    {
        name: '新北市',
        engName: 'new-taipei',
        coords: '25.012506,121.465692'
    },
    {
        name: '桃園市',
        engName: 'taoyuan',
        coords: '24.993122,121.301027'
    },
    {
        name: '新竹市',
        engName: 'hsinchu',
        coords: '24.806813,120.968795'
    },
    {
        name: '新竹縣',
        engName: 'hsinchu-county',
        coords: '24.826932,121.012900'
    },
    {
        name: '苗栗縣',
        engName: 'miaoli',
        coords: '24.564909,120.820741'
    },
    {
        name: '臺中市',
        engName: 'taichung',
        coords: '24.161889,120.646870'
    },
    {
        name: '彰化縣',
        engName: 'changhua',
        coords: '24.075555,120.544684'
    },
    {
        name: '南投縣',
        engName: 'nantou',
        coords: '23.902766,120.690496'
    },
    {
        name: '雲林縣',
        engName: 'yunlin',
        coords: '23.699183,120.526334'
    },
    {
        name: '嘉義市',
        engName: 'chiayi',
        coords: '23.481337,120.453595'
    },
    {
        name: '嘉義縣',
        engName: 'chiayi-county',
        coords: '23.458778,120.292970'
    },
    {
        name: '宜蘭縣',
        engName: 'yilan',
        coords: '24.730846,121.763120'
    },
    {
        name: '花蓮縣',
        engName: 'hualien',
        coords: '23.991340,121.619814'
    },
    {
        name: '臺東縣',
        engName: 'taitung',
        coords: '22.755476,121.150530'
    },
    {
        name: '臺南市',
        engName: 'tainan',
        coords: '22.997158,120.212645'
    },
    {
        name: '高雄市',
        engName: 'kaohsiung',
        coords: '22.620929,120.311887'
    },
    {
        name: '屏東縣',
        engName: 'pingtung',
        coords: '22.683091,120.487966'
    },
    {
        name: '連江縣',
        engName: 'lienchiang',
        coords: '26.157879,119.951787'
    },
    {
        name: '金門縣',
        engName: 'kinmen',
        coords: '24.436808,118.318634'
    },
    {
        name: '澎湖縣',
        engName: 'penghu',
        coords: '23.570007,119.566379'
    }
]

const getCityInfo = (engName) => {
    return cityList.find(city => city.engName === engName)
}

export { weatherToIcon, withUnits, syncTheme, cityList, getCityInfo }

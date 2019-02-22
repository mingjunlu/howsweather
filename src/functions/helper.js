const coordsToName = (lat, lon) => {
    const coords = `${lat.toFixed(6)},${lon.toFixed(6)}`
    switch (coords) {
        case '25.131645,121.744651':
            return '基隆市'
        case '25.038062,121.564448':
            return '臺北市'
        case '25.012506,121.465692':
            return '新北市'
        case '24.993122,121.301027':
            return '桃園市'
        case '24.806813,120.968795':
            return '新竹市'
        case '24.826932,121.012900':
            return '新竹縣'
        case '24.564909,120.820741':
            return '苗栗縣'
        case '24.161889,120.646870':
            return '臺中市'
        case '24.075555,120.544684':
            return '彰化縣'
        case '23.902766,120.690496':
            return '南投縣'
        case '23.699183,120.526334':
            return '雲林縣'
        case '23.481337,120.453595':
            return '嘉義市'
        case '23.458778,120.292970':
            return '嘉義縣'
        case '24.730846,121.763120':
            return '宜蘭縣'
        case '23.991340,121.619814':
            return '花蓮縣'
        case '22.755476,121.150530':
            return '臺東縣'
        case '22.997158,120.212645':
            return '臺南市'
        case '22.620929,120.311887':
            return '高雄市'
        case '22.683091,120.487966':
            return '屏東縣'
        case '26.157879,119.951787':
            return '連江縣'
        case '24.436808,118.318634':
            return '金門縣'
        case '23.570007,119.566379':
            return '澎湖縣'
        default:
            return '天氣'
    }
}

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

const coordList = [
    '25.131645,121.744651',
    '25.038062,121.564448',
    '25.012506,121.465692',
    '24.993122,121.301027',
    '24.806813,120.968795',
    '24.826932,121.012900',
    '24.564909,120.820741',
    '24.161889,120.646870',
    '24.075555,120.544684',
    '23.902766,120.690496',
    '23.699183,120.526334',
    '23.481337,120.453595',
    '23.458778,120.292970',
    '24.730846,121.763120',
    '23.991340,121.619814',
    '22.755476,121.150530',
    '22.997158,120.212645',
    '22.620929,120.311887',
    '22.683091,120.487966',
    '26.157879,119.951787',
    '24.436808,118.318634',
    '23.570007,119.566379'
]

export { coordsToName, weatherToIcon, coordList, syncTheme }

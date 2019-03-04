const weatherToIcon = (description) => {
    switch(description) {
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

export default weatherToIcon

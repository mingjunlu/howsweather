const syncTheme = (description) => {
    const lightBlueTheme = 'linear-gradient(180deg, rgb(115, 165, 197) 0%, rgb(58, 132, 182) 35%)'
    const lightGrayTheme = 'linear-gradient(180deg, rgb(124, 133, 134) 0%, rgb(81, 101, 117) 35%)'
    const darkGrayTheme = 'linear-gradient(180deg, rgb(16, 20, 40) 0%, rgb(43, 53, 82) 35%)'
    if (!description) { return lightBlueTheme }

    switch(description) {
        case 'clear-day':
        case 'partly-cloudy-day':
        case 'cloudy':
            return lightBlueTheme

        case 'rain':
        case 'fog':
        case 'wind':
        case 'snow':
            return lightGrayTheme

        case 'clear-night':
        case 'partly-cloudy-night':
        default:
            return darkGrayTheme
    }
}

export default syncTheme

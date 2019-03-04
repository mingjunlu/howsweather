const syncTheme = (description) => {
    const lightTheme = 'linear-gradient(170deg, rgb(85, 165, 200) 0%, rgb(69, 140, 184) 45%'
    const darkTheme = 'linear-gradient(170deg, rgb(124, 133, 134) 0%, rgb(81, 101, 117) 45%'
    if (!description) {return lightTheme}

    switch(description) {
        case 'clear-day':
        case 'partly-cloudy-day':
        case 'cloudy':
            return lightTheme
        default:
            return darkTheme
    }
}

export default syncTheme

const syncTheme = (description) => {
    const lightTheme = 'linear-gradient(180deg, rgb(115, 165, 197) 0%, rgb(58, 132, 182) 35%)'
    const darkTheme = 'linear-gradient(180deg, rgb(124, 133, 134) 0%, rgb(81, 101, 117) 35%)'
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

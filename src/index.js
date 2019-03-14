import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import WebFont from 'webfontloader'
import {
    faAngleLeft,
    faCircleNotch,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudShowersHeavy,
    faCompass,
    faCrow,
    faExclamationTriangle,
    faLocationArrow,
    faMapMarkerAlt,
    faMoon,
    faQuestionCircle,
    faSearch,
    faSmog,
    faSnowflake,
    faSun,
    faTimes,
    faWind
} from '@fortawesome/free-solid-svg-icons'
import AppRouter from './AppRouter'
import 'normalize.css/normalize.css'
import 'animate.css/animate.css'
import './styles/styles.scss'


WebFont.load({
    google: {
        families: ['Work Sans:200']
    }
})

library.add(
    faAngleLeft,
    faCircleNotch,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudShowersHeavy,
    faCompass,
    faCrow,
    faExclamationTriangle,
    faLocationArrow,
    faMapMarkerAlt,
    faMoon,
    faQuestionCircle,
    faSearch,
    faSmog,
    faSnowflake,
    faSun,
    faTimes,
    faWind
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))

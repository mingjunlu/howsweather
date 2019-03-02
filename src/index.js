import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import WebFont from 'webfontloader'
import {
    faCircleNotch,
    faExclamationTriangle,
    faQuestionCircle,
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudShowersHeavy,
    faWind,
    faSmog,
    faSnowflake,
    faSearch,
    faCrow
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
    faCircleNotch,
    faExclamationTriangle,
    faQuestionCircle,
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudShowersHeavy,
    faWind,
    faSmog,
    faSnowflake,
    faSearch,
    faCrow
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
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
    faCaretSquareDown
} from '@fortawesome/free-solid-svg-icons'
import App from './components/App'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

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
    faCaretSquareDown
)

ReactDOM.render(<App />, document.getElementById('root'))

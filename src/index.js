import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import App from './components/App'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

library.add(faCloudSun)
ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import PageNotFound from './components/shared/PageNotFound'
import * as locations from './utils/locations.json'

// 縣、市、鄉、鎮、區的路徑
const allPaths = locations.default.map(loc => loc.path.slice(1, -1)).join('|')

const AppRouter = () => (
    <BrowserRouter>
        <Route render={props => (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path={`/(${allPaths})/`} key={props.location.key} component={App} />
                <Route component={PageNotFound} />
            </Switch>
        )}/>
    </BrowserRouter>
)

export default AppRouter

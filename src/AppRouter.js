import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CentralStore from './CentralStore'
import PageNotFound from './components/shared/PageNotFound'
import withGeolocation from './utils/withGeolocation'
import * as locations from './utils/locations.json'

// 縣、市、鄉、鎮、區的路徑
const predefinedLocations = locations.default.map(loc => loc.path.slice(1, -1)).join('|')

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => withGeolocation(CentralStore, props)} />
            <Route
                exact
                path={`/(${predefinedLocations})/`}
                render={props => withGeolocation(CentralStore, props)}
            />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter

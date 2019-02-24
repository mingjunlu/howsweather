// Libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Components
import App from './components/App'
import PageNotFound from './components/shared/PageNotFound'
// Functions
import { cityList } from './functions/helper'


// 所有城市的英文代稱
const allPaths = cityList.map(city => city.engName).join('|')

const AppRouter = () => (
    <BrowserRouter>
        <Route render={props => (
            <Switch>
                <Route exact path="/" component={App} />
                <Route
                    path={`/(${allPaths})/`}
                    key={props.location.key}
                    component={App}
                />
                <Route component={PageNotFound} />
            </Switch>
        )}/>
    </BrowserRouter>
)

export default AppRouter

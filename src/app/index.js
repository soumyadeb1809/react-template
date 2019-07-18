import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"

import Dashboard from './components/Dashboard';
import DashboardDetails from './components/DashboardDetails';


import store from './store';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/analytics/:id" component={DashboardDetails} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    window.document.getElementsByClassName('app')[0]
);

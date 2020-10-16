import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from '../pages/Create';
import Dashboard from '../pages/Dashboard';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
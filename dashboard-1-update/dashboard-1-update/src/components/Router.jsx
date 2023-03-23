import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../pages/Dashboard.jsx'
import Customer from '../pages/Customer.jsx';


const Router = () => {
    return (
        <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/customers" component={Customer}/>
            
        </Switch>
    )
}

export default Router

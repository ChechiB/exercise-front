import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App}/>
            <Route path="*" component={NotFound}/> */}
        </Switch>
    </BrowserRouter>
)

export default Router;
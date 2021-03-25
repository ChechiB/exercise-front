import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ProductItem from './components/productItem/ProductItem';
import ProductList from './components/productList/ProductList'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/items/:id" component={ProductItem}/>
            <Route path="/items" component={ProductList}/>
            <Route exact path="/" component={App}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
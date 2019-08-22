import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CounterPage from "./components/counter/CounterPage";
import ProductsPage from "./containers/products/ProductsPage";
import ManageProductPage from "./containers/products/ManageProductPage";

export default (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/product/:id" component={ManageProductPage} />
        <Route path="/product" component={ManageProductPage} />
    </Switch>
);
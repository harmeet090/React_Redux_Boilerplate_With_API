import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import Root from './components/Root';

import { loadProducts } from "./actions/productActions";

const store = configureStore();
store.dispatch(loadProducts());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>

    , document.getElementById('container'));
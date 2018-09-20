import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import DefaultLayout from './DefaultLayout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Page404 from './Page404.jsx';
import ShopContainer from '../containers/ShopContainer.js';
import ProductContainer from '../containers/ProductContainer.js';
import ShoppingCartContainer from '../containers/ShoppingCartContainer.js';

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <DefaultLayout
                        exact path="/"
                        component={Home} />
                    <DefaultLayout
                        path="/about"
                        component={About} />
                    <DefaultLayout
                        path="/contact"
                        component={Contact} />
                    <DefaultLayout
                        path="/shop"
                        component={ShopContainer} />
                    <DefaultLayout
                        path="/product/:name"
                        component={ProductContainer} />
                    <DefaultLayout
                        path="/shoppingcart"
                        component={ShoppingCartContainer} />
                    <DefaultLayout component={Page404} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;

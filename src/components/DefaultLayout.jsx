import React from 'react';
import { Route } from "react-router-dom";
import HeaderContainer from '../containers/HeaderContainer.js';
import Footer from "./Footer.jsx";

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <HeaderContainer />
                <Component {...matchProps} />
                <Footer />
            </div>
        )} />
    )
};

export default DefaultLayout;
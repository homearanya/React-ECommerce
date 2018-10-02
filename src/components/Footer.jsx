import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

export default class Footer extends Component {
    backToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer className="text-muted">
                <div className="row col-md-12 postfooter">
                    <div className="container">
                        <div className="text-center position-relative">
                            <p>
                                <Link to="/" >Home</Link> -    <Link to="/about" >About</Link> -    <Link to="/contact">Contact</Link>
                            </p>
                            <p>info@wwimporters.co.za</p>
                            <p>&copy; Copyright 2018 - Wide World Importers</p>
                            <p id="backToTop" onClick={this.backToTop}>
                                Back to top
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}

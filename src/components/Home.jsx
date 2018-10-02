import React, { Component } from 'react'; import CarouselContainer from '../containers/CarouselContainer.js';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container mb-5">
        <h1 className="mb-3 text-center">WELCOME TO WIDE WORLD IMPORTERS</h1>
        <h3 className="mb-5 text-center ">Shopping made easy</h3>
        <CarouselContainer />
        <div id="shopButton" className="text-center">
          <Link to="/shop" className="btn btn-primary btn-lg" >Go to Shop</Link>
        </div>
      </div>
    )
  }
}
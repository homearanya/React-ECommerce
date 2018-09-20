import React from 'react';
import CarouselContainer from '../containers/CarouselContainer.js';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
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
};

export default Home;
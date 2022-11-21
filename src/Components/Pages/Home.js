import React from 'react';
import Banner from '../props/Banner';
import Countries from '../props/Countries';
import Footer from '../props/Footer';
import Nav from '../props/NavBar';
import '../../styles/country.css';

function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="countries-container">
        <div className="countries-heading">
          <h1 >Countries</h1>
          <h5>--Browse Air pollution by Country--</h5>
        </div>
        <Countries />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

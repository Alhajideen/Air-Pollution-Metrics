import React from 'react';
import Banner from '../props/Banner';
import Countries from '../props/Countries';
import Nav from '../props/NavBar';

function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="countries-container">
        <Countries />
      </div>
    </div>
  );
}

export default Home;

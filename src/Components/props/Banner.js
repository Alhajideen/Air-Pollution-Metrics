import React from 'react';
import '../../styles/nav-banner.css';
import Form from 'react-bootstrap/Form';

function Banner() {
  return (
    <div>
      <section className="banner-section">
        <div className="banner shadow p-3 mb-5 bg-white">
          <div className="banner-text">
            <h1 className="">Get air quality data </h1>
            <h2>Where you live.</h2>
          </div>
          <div className="search">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find your country"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;

import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/country.css';
import data from '../../data/data';
import { Link } from 'react-router-dom';

function Countries() {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="container">
      <CardGroup>
        <div className="row">
          {data.map((country) => {
            return (
              <div
                className="col-sm-12 col-md-4 card-card"
                key={country.alpha3}
              >
                <Card className="shadow p-3 mb-5 bg-white">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={country.map}
                  />
                  <Card.Body>
                    <Link to={`/${country.country}`}>
                      <h6 className="country-name">
                        COUNTRY: {country.country}
                      </h6>
                    </Link>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      ALPHA: {country.alpha3}
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
        </div>
      </CardGroup>
    </div>
  );
}

export default Countries;

import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from '../../imgs/logo.PNG';
import '../../styles/country.css';

function Countries() {
  return (
    <div className="container">
      <CardGroup>
        <div className="row">
          <div className="col-sm-12 col-md-4 card-card">
            <Card>
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title>COUNTRY: FRANCE</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ALPHA: FRA</small>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Countries;

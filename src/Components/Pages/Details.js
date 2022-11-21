import React, { useEffect, useState } from 'react';
import NavBar from '../props/NavBar';
import '../../styles/details.css';
import countriesData from '../../data/data';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Footer from '../props/Footer';
import { useParams } from 'react-router-dom';
import data from '../../data/data';

function Details() {
  const { country } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    data.forEach((e) => {
      if (e.country === country) {
        console.log(e);
        setMap(e.map);
        setName(e.country);
        const obj = {
          lat: e.latitude,
          long: e.longitude,
        };
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="back-home"></div>
      <div className="county-details">
        <div className="country-info">
          <h1>{name}</h1>
          <img src={map} alt="" />
        </div>
        <div className="pollution-data">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Gas</th>
                <th>Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
              <tr>
                <td>1</td>
                <td>CO</td>
                <td>0.42</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;

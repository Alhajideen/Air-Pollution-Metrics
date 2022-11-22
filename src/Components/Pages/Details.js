import React, { useEffect, useState } from 'react';
import NavBar from '../props/NavBar';
import '../../styles/details.css';
import Table from 'react-bootstrap/Table';
import Footer from '../props/Footer';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import { useSelector, useDispatch } from 'react-redux';
import { getPollutionData } from '../../redux/slice';

function Details() {
  const { country } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach((e) => {
      if (e.country === country) {
        setMap(e.map);
        setName(e.country);
        const endPoint = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latitude}&lon=${e.longitude}&appid=af2778309f98e0c5d550f18b1778fb20`;
        dispatch(getPollutionData(endPoint));
      }
    });
  }, []);
  const pollutionData = useSelector((state) => state.pollution.data);
  const loading = useSelector((state) => state.pollution.loading);
  setTimeout(() => {
    console.log(loading);
  }, 3000);

  // useEffect(() => {}, []);

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
              {pollutionData &&
                pollutionData.map((data, i) => {
                  return (
                    <tr key={data[0]}>
                      <td>{i + 1}</td>
                      <td>{data[0]}</td>
                      <td>{data[1]}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;

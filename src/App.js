
import logo from './images/metro.png';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';





function App() {


  const [stations, getStation] = useState('');
  useEffect(() => {
    stationDetails();
  }, []);




  const stationDetails = () => {
    axios.get('http://52.203.100.234:5010/files/stops.txt')
      .then((response) => {
        const allStation = response.data
        getStation(allStation);
      })
      .catch(console.log("error"))
  }




  return (
    <Display stations={stations} />
  );
}



function Display(props) {


  const DisplayStations = (props) => {
    const { stations } = props;
    if (stations.length > 0) {
      return (
        stations.map((station, index) => {
          return (

            <div className='data-container'>
              <h4>{station.stop_name}
              </h4>
              <hr></hr>
              <div className='api-data'>
                <div className='api-key'>
                  <p>Station id</p>
                  <p>Theme</p>
                  <p>Theme Discription</p>
                </div>
                <div className='api-value'>
                  <h5>{station.stop_id}</h5>
                  <h5>Theme</h5>
                  <h5></h5>
                </div>
              </div>
            </div>

          )
        }
        )
      )
    }

  }


  return (
    <div>
      <header>
        <div className="heading">
          <img className="logo" src={logo} alt='logo' />
          <h1>Kochi Metro</h1>
        </div>
      </header>
      <div className="content">
        <div className="body-heading">
          <h2>Metro Station Details and Fare Calculation</h2>
          <p className="descrition">By selecting the departure and arrival stations in the below you will be able to see the ticket fare</p>
        </div>
        <div className="station">
          <div className="station-details">


            <div className="departure">
              <h2>Select Departure Station</h2>
              <div className='container'>
                {DisplayStations(props)}
              </div>
            </div>


            <div className="arrival">
              <h2>Select Arrival Station</h2>
              <div className='container'>
                {DisplayStations(props)}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;

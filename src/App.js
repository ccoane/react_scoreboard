import React, { useState, useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://nerf-data-api-dfw.herokuapp.com/koth/status/';
const DEFAULT_QUERY = 'redux';

var interval = null;
const intervalRefreshValue = 500;



function App() {
  // Declare a new state variable, which we'll call "count"
  const [statusData, setStatusData] = useState({"Teams":[{"teamName":"Red","isActive":false,"timerStartedAt":null,"elapsedTimeInSeconds":0},{"teamName":"Blue","isActive":false,"timerStartedAt":null,"elapsedTimeInSeconds":0}],"ElapsedGameTime":0,"ElapsedGameTimeFormatted":"00:00"});
  // const [teamsData, setTeamsData  ] = userState([Red: 0, Blue: 0])

  const formatStatusData = (data) => {
    // setStatusData( data.Teams.forEach(team => { 
      
    // }))
  }

  useEffect(() => {
    interval = setInterval(() => {
      fetch(API)
      .then(response => response.json())
      .then(data => setStatusData ( data ));
      // .then(data => formatStatusData ( data ));
    }, intervalRefreshValue);
  }, []);

  // if (null == statusData.Teams || null == statusData.Teams["0"]) return null;

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Game Time: {statusData.ElapsedGameTimeFormatted} <br />
          {statusData.Teams["0"].teamName}: {statusData.Teams["0"].elapsedTimeInSeconds}  <br />
          {statusData.Teams["1"].teamName}: {statusData.Teams["1"].elapsedTimeInSeconds}  <br />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

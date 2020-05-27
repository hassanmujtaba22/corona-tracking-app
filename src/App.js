import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveStats from "./component/LiveStats"
import Countries from './component/Countries';
import './App.css'


function App() {
  return (
    <div>
      <h1>Covid-19 Live Stats</h1>
      <LiveStats/>
      <Countries/>
    </div>
  );
}

export default App;

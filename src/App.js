import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import countries from './countries.json';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <CountriesList countries={countries} />
      </div>
      <div className="col-7">
            <Route exact path="/:cca3" component={CountryDetails} />
          </div>
    </div>
  );
}

export default App;

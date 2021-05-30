import React from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

const Countries = (props) => {
  return (
    <div>
    {props.countries.map((country) => {
        return (
                <Link 
                key={country.cca3}
                to={`/${country.cca3}`}>{country.flag} {country.name.common}
                </Link>
        );
    })}
    </div>
  );
};
     


export default Countries;
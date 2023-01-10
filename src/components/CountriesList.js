import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './CountriesList.css'


function CountriesList() {
  const [countries, setCountries] = useState([]);

const countriesDescending = [...countries].sort((a,b)=>
a.name.common < b.name.common ? -1 : 1)

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div className = "list" style={{maxHeight: "90vh", overflow: "scroll"}}>
      {countriesDescending.map((e, i) => {
        return (
          <div key={e._id}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt='littleflag' /><br/>
<Link to={`/countries/${e.alpha3Code}`}> {e.name.common} </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;

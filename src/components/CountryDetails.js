import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
  let { code } = useParams();
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCountry()
  }, [code]);

  const fetchCountry = async () => {
  await axios 
      .get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
      .then((response) => {
      setMyData(response.data);
      setLoading(true)})
  }


  console.log(myData);

  return (
    <div>
    {loading && myData.alpha2Code  && (
        <>
      <img src={`https://flagpedia.net/data/flags/w580/${myData.alpha2Code.toLowerCase()}.png`} alt='littleflag' /> 
      <h1>{myData.name.common}</h1>
      <p>Capital: {myData.capital}</p>
      <p>Area: {myData.area} km2 </p>

</>
    )}
    </div>
  );
};

export default CountryDetails;

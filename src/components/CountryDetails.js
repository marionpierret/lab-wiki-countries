import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CountryDetails.css'

const CountryDetails = () => {
  let { code } = useParams();
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountry();
  }, [code]);

  const fetchCountry = async () => {
    await axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
      .then((response) => {
        setMyData(response.data);
        setLoading(true);
      });
  };

  // console.log(myData);

  return (
    <div className = 'countryDetails'>
      {loading && myData.alpha2Code && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/w580/${myData.alpha2Code.toLowerCase()}.png`}
            alt="littleflag"
          />
          <h1>{myData.name.common}</h1>
          <table className="table">
            <tr>
              <td>Capital</td><td> {myData.capital}</td>
            </tr>
            <tr>
              <td>Area</td> <td>{myData.area} km<sup>2</sup>{' '}
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {myData.borders.length > 0 ? (
                    myData.borders.map((e) => {
                      return <li> {e}</li>;
                    })
                  ) : (
                    <p>No borders</p>
                  )}
                </ul>
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryDetails;

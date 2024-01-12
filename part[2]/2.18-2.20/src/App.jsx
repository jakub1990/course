import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ country }) => {
  const { name, capital, area, flags, languages, capitalInfo } = country;
  const [weather, setWeather] = useEffect('');
  const url = `http://api.weatherapi.com/v1/current.json?key=8f0127b23f8240aeb38214850241201&q=${capital[0]}&aqi=no`;

  useEffect(() => {
  axios.get(url)
    .then(response => setWeather(response.data.current))
    .then()
  }, [setWeather])


  return (
    <div>
      <h2>{name.common}</h2>
      <p><strong>Capital:</strong> {capital && capital[0]}</p>
      <p><strong>Area:</strong> {area && area.toLocaleString()} km²</p>
      <p><strong>Languages:</strong> {languages && Object.values(languages).join(', ')}</p>
      <img src={flags && flags.png} alt={`${name.common}'s flag`} style={{ maxWidth: '200px' }} />
      <h2>Weather now</h2>
      <p>{setWeather}</p>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (searchQuery.trim() === '') {
          setCountries([]);
          return;
        }

        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchQuery}`
        );

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();

        if (data.length > 10) {
          setCountries([]);
          setError('Too many matches. Please make your query more specific.');
        } else {
          setCountries(data);
          setError('');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setCountries([]);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchCountries();
  }, [searchQuery]);

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <label htmlFor="searchInput">Search Country: </label>
      <input
        type="text"
        id="searchInput"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {countries.length === 1 && <CountryDetails country={countries[0]} />}

      {countries.length > 1 && (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleShowDetails(country)}>
                Show Details
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default App;
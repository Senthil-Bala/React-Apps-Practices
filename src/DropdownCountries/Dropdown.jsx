import React, { useState } from 'react';

function Dropdown() {
  const countries = [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
    { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
  ];
  const [selectedCountry, setSelectedCountry] = useState(0);

  return (
    <div>
      <h1>Country</h1>

      {/* 1st Dropdown */}
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.map((country, index) => (
          <option value={index} key={index}>
            {country.name}
          </option>
        ))}
      </select>

      {/* 2nd Dropdown */}
      {countries[selectedCountry] && (
        <select>
          {countries[selectedCountry].cities.map((city, index) => (
            <option value={index} key={index}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Dropdown;

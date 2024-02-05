import React from "react";
import { accommodationOptions, cities, countries } from "./selects-stucture";

type CountrySelectProps = {
  setSelectedCountry: (country: string) => void;
  setSelectedCity: (city: string) => void;
  setSelectedAccommodation: (accommodation: string) => void;
};

const CountrySelect: React.FC<CountrySelectProps> = ({
  setSelectedCountry,
  setSelectedCity,
  setSelectedAccommodation,
}) => {
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(
      e.target.value === countries.RF ? cities.Moscow : cities.Minsk
    );
    setSelectedAccommodation(accommodationOptions.dormitory);
  };

  return (
    <p>
      <label htmlFor="countrySelect">Выбор страны:</label>
      <select id="countrySelect" onChange={handleCountryChange}>
        <option defaultChecked value={countries.RF}>
          {countries.RF}
        </option>
        <option value={countries.RB}>{countries.RB}</option>
      </select>
    </p>
  );
};

export default CountrySelect;

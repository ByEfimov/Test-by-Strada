import React from "react";
import { cities, countries } from "./selects-stucture";

type CitySelectProps = {
  selectedCountry: string;
  setSelectedCity: (city: string) => void;
  selectedCity: string;
};

const CitySelect: React.FC<CitySelectProps> = ({
  selectedCountry,
  setSelectedCity,
  selectedCity,
}) => {
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <p>
      <label htmlFor="citySelect">Выбор города:</label>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
        {selectedCountry === countries.RB ? (
          <>
            <option value={cities.Minsk} defaultChecked>
              {cities.Minsk}
            </option>
            <option value={cities.Gomel}>{cities.Gomel}</option>
          </>
        ) : (
          <>
            <option value={cities.Moscow} defaultChecked>
              {cities.Moscow}
            </option>
            <option value={cities.Sochi}>{cities.Sochi}</option>
          </>
        )}
      </select>
    </p>
  );
};

export default CitySelect;

import { useState } from "react";
import CountrySelect from "./Selects/country-select";
import CitySelect from "./Selects/city-select";
import UniversityTypeSelect from "./Selects/university-type-select";
import AccommodationSelect from "./Selects/accommodation-select";
import {
  accommodationOptions,
  cities,
  countries,
  universityTypes,
} from "./Selects/selects-stucture";
import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries.RF);
  const [selectedCity, setSelectedCity] = useState(cities.Moscow);
  const [selectedUniversityType, setSelectedUniversityType] = useState(
    universityTypes.technical
  );
  const [selectedAccommodation, setSelectedAccommodation] = useState(
    accommodationOptions.dormitory
  );

  const handlerSubmitForm = () => {
    console.log(
      selectedCountry,
      selectedCity,
      selectedUniversityType,
      selectedAccommodation
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlerSubmitForm();
      }}
    >
      <fieldset>
        <CountrySelect
          setSelectedCountry={setSelectedCountry}
          setSelectedCity={setSelectedCity}
          setSelectedAccommodation={setSelectedAccommodation}
        />
        <CitySelect
          selectedCountry={selectedCountry}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
        <UniversityTypeSelect
          setSelectedUniversityType={setSelectedUniversityType}
          selectedUniversityType={selectedUniversityType}
        />
        <AccommodationSelect
          selectedCountry={selectedCountry}
          setSelectedAccommodation={setSelectedAccommodation}
          selectedAccommodation={selectedAccommodation}
        />
        <button type="submit">Подтвердить</button>
      </fieldset>
    </form>
  );
}

export default App;

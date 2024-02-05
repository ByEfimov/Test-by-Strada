import React from "react";
import { accommodationOptions, countries } from "./selects-stucture";

type AccommodationSelectProps = {
  selectedCountry: string;
  setSelectedAccommodation: (accommodation: string) => void;
  selectedAccommodation: string;
};

const AccommodationSelect: React.FC<AccommodationSelectProps> = ({
  selectedCountry,
  setSelectedAccommodation,
  selectedAccommodation,
}) => {
  const handleAccommodationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedAccommodation(e.target.value);
  };

  return (
    <p>
      <label htmlFor="accommodationSelect">Вариант проживания:</label>
      <select
        id="accommodationSelect"
        value={selectedAccommodation}
        onChange={handleAccommodationChange}
      >
        {selectedCountry === countries.RB ? (
          <>
            <option defaultChecked value={accommodationOptions.dormitory}>
              {accommodationOptions.dormitory}
            </option>
            <option value={accommodationOptions.notInterested}>
              {accommodationOptions.notInterested}
            </option>
          </>
        ) : (
          <>
            <option defaultChecked value={accommodationOptions.dormitory}>
              {accommodationOptions.dormitory}
            </option>
            <option value={accommodationOptions.rent}>
              {accommodationOptions.rent}
            </option>
            <option value={accommodationOptions.notInterested}>
              {accommodationOptions.notInterested}
            </option>
            <option value={accommodationOptions.dormitoryAndRent}>
              {accommodationOptions.dormitoryAndRent}
            </option>
          </>
        )}
      </select>
    </p>
  );
};

export default AccommodationSelect;

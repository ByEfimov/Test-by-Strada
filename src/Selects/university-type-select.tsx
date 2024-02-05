import React from "react";
import { universityTypes } from "./selects-stucture";

type UniversityTypeSelectProps = {
  setSelectedUniversityType: (type: string) => void;
  selectedUniversityType: string;
};

const UniversityTypeSelect: React.FC<UniversityTypeSelectProps> = ({
  setSelectedUniversityType,
  selectedUniversityType,
}) => {
  const handleUniversityTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedUniversityType(e.target.value);
  };

  return (
    <p>
      <label htmlFor="universityTypeSelect">Вид ВУЗа:</label>
      <select
        id="universityTypeSelect"
        value={selectedUniversityType}
        onChange={handleUniversityTypeChange}
      >
        <option defaultChecked value={universityTypes.technical}>
          {universityTypes.technical}
        </option>
        <option value={universityTypes.humanitarian}>
          {universityTypes.humanitarian}
        </option>
      </select>
    </p>
  );
};

export default UniversityTypeSelect;

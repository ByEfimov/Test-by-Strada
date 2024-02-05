const selectStructure = {
  countries: {
    RF: {
      name: "РФ",
      cities: ["Москва", "Сочи"],
      universityTypes: ["Технический", "Гуманитарный"],
      accommodationOptions: [
        "Общежития",
        "Аренда",
        "Не интересует",
        "Общежития + Аренда",
      ],
    },
    RB: {
      name: "РБ",
      cities: ["Минск", "Гомель"],
      universityTypes: ["Технический", "Гуманитарный"],
      accommodationOptions: ["Общежития", "Не интересует"],
    },
  },
};

const countries = {
  RF: "РФ",
  RB: "РБ",
};
const cities = {
  Moscow: "Москва",
  Sochi: "Сочи",
  Minsk: "Минск",
  Gomel: "Гомель",
};

const universityTypes = {
  technical: "Технический",
  humanitarian: "Гуманитарный",
};
const accommodationOptions = {
  dormitory: "Общежитие",
  rent: "Аренда",
  notInterested: "Не интересует",
  dormitoryAndRent: "Общежитие + Аренда",
};

export { countries, cities, universityTypes, accommodationOptions };
export default selectStructure;

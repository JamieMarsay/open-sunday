interface IPlace {
  plural: string;
  icon: string;
}

export const placeLookup: { [key: string]: IPlace } = {
  church: {
    plural: "Churches",
    icon: "⛪"
  },
  bar: {
    plural: "Bars",
    icon: "🍺"
  },
  dentist: {
    plural: "Dentists",
    icon: "👨‍⚕️"
  },
  doctor: {
    plural: "Doctors",
    icon: "👩‍⚕️"
  },
  pharmacy: {
    plural: "Pharmacies",
    icon: "💊"
  }
};

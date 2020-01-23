interface IPlace {
  placesType: string
  plural: string;
}

export const placeLookup: { [key: string]: IPlace } = {
  Bar: {
    plural: "Bars",
    placesType: "bar"
  },
  Bank: {
    plural: "Banks",
    placesType: "bank"
  },
  Cafe: {
    plural: "Cafes",
    placesType: "cafe"
  },
  "Car Park": {
    plural: "Car Parks",
    placesType: "parking"
  },
  Church: {
    plural: "Churches",
    placesType: "church"
  },
  Cinema: {
    plural: "Cinemas",
    placesType: "movie_theater"
  },
  Dentist: {
    plural: "Dentists",
    placesType: "dentist"
  },
  Doctor: {
    plural: "Doctors",
    placesType: "doctor"
  },
  "DIY Shop": {
    plural: "DIY Shops",
    placesType: "hardware_store"
  },
  Electrician: {
    plural: "Electricians",
    placesType: "electrician"
  },
  Florist: {
    plural: "Florists",
    placesType: "florist"
  },
  Gym: {
    plural: "Gyms",
    placesType: "gym"
  },
  Library: {
    plural: "Libraries",
    placesType: "library"
  },
  Locksmith: {
    plural: "Locksmiths",
    placesType: "locksmith"
  },
  Museum: {
    plural: "Museums",
    placesType: "museum"
  },
  "Night Club": {
    plural: "Night Clubs",
    placesType: "night_club"
  },
  Park: {
    plural: "Parks",
    placesType: "park"
  },
  Pharmacy: {
    plural: "Pharmacies",
    placesType: "pharmacy"
  },
  "Petrol Station": {
    plural: "Petrol Stations",
    placesType: "gas_station"
  },
  "Pet Shop": {
    plural: "Pet Shops",
    placesType: "pet_store"
  },
  Plumber: {
    plural: "Plumber",
    placesType: "plumber"
  },
  "Post Office": {
    plural: "Post Offices",
    placesType: "post_office"
  },
  Restaurant: {
    plural: "Restaurants",
    placesType: "restaurant"
  },
  Salon: {
    plural: "Salons",
    placesType: "beauty_salon"
  },
  Supermarket: {
    plural: "Supermarkets",
    placesType: "supermarket"
  },
  Takeaway: {
    plural:  "Takeaways",
    placesType: "meal_takeaway"
  },
};

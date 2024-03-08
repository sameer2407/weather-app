var apiKey2 = process.env.REACT_APP_LOCATION_API_KEY;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey2,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

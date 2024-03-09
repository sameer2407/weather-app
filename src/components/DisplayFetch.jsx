import React, { useState, useEffect } from "react";
import WeatherBox from "./WeatherBox";
import { CiLocationOn } from "react-icons/ci";

import SearchCities from "./SearchCities";
import { ColorRing } from "react-loader-spinner";

const DisplayFetch = ({
  latitude,
  longitude,
  updateLocation,
  click,
  setClick,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  const buttonClick = () => {
    if (click == true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f728ced33a32bce98c93a5e36a508c94`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="bg-paleBlue p-8 rounded-lg shadow-lg flex flex-col ">
          <div className="relative border border-solid border-gray-300 rounded-md mb-4">
            <SearchCities
              latCity={latitude}
              longCity={longitude}
              update={updateLocation}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <WeatherBox title="Current Temp" value={`${data.main.temp}°C`} />
            <WeatherBox
              title="Feels Like"
              value={`${data.main.feels_like}°C`}
            />
            <WeatherBox title="Pressure" value={`${data.main.pressure} hPa`} />
            <WeatherBox title="Humidity" value={`${data.main.humidity}%`} />
            <WeatherBox title="Wind Speed" value={`${data.wind.speed} m/s`} />
            <WeatherBox title="City" value={`${data.name}`} />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center"
              onClick={buttonClick}
            >
              <CiLocationOn className="text-3xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayFetch;

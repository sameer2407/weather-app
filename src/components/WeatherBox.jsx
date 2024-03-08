import React from "react";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { FaTachometerAlt } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";

const WeatherBox = ({ title, value }) => {
  const iconMap = {
    "Min Temp": <FaTemperatureArrowDown />,
    "Max Temp": <FaTemperatureArrowUp />,
    "Wind Speed": <LuWind />,
    Pressure: <FaTachometerAlt />,
    "Feels Like": <MdMood />,
    Humidity: <WiHumidity />,
    City: <FaCity />,
  };
  return (
    <div className="bg-primaryPurple p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-sm text-lightGray font-semibold mb-2">{title}</h1>
        <div className="text-2xl text-lightGray">{iconMap[title]}</div>
      </div>
      <p className="text-lightGray">{value}</p>
    </div>
  );
};

export default WeatherBox;

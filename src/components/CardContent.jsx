import React, { useContext } from "react";
import HumidityImg from "../assets/humidity.png";
import WindImg from "../assets/wind.png";
import { ApiContext } from "../context/ApiContext";

const CardContent = () => {
  const { dataState } = useContext(ApiContext);
  const { data, city, currentDate, iconPath } = dataState;
  const { temp, humidity, windSpeed } = { ...data };

  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={iconPath}
        alt="Weather image"
        className="w-24 h-24 mb-8 pt-4"
      />
      <h3 className="text-3xl font-bold mb-1 text-gray-800">{temp}°C</h3>
      <h3 className="text-lg text-gray-500 mb-4">{city}</h3>
      <div className="flex flex-col sm:flex-row justify-between w-full mt-4 gap-4">
        <div className="flex items-center space-x-2 bg-blue-900/80 rounded-xl px-3 py-2 flex-1 min-w-0 shadow-md">
          <img src={HumidityImg} alt="Humidity" className="w-6 h-6" />
          <div>
            <span className="font-semibold text-white">{humidity}%</span>
            <span className="block text-xs text-blue-100">Humidity</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800/90 rounded-xl px-3 py-2 flex-1 min-w-0 shadow-md">
          <img src={WindImg} alt="Wind" className="w-6 h-6" />
          <div>
            <span className="font-semibold text-white">{windSpeed} km/h</span>
            <span className="block text-xs text-gray-300">Wind</span>
          </div>
        </div>
      </div>
      <span className="mt-6 text-xs text-gray-400">{currentDate}</span>
    </div>
  );
};

export default CardContent;

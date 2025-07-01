import React, { useState, useContext } from "react";
import SearchIcon from "../assets/search.png";
import { ApiContext } from "../context/ApiContext";
import { handleSearch } from "../utils/handleSearch";

const CardHeader = () => {
  const { dataDispatch } = useContext(ApiContext);

  const [inputCity, setInputCity] = useState("");

  const handleSubmit = () => {
    if (
      (inputCity.trim() === "" || inputCity.length < 1 || inputCity.length > 20)
    ) {
      dataDispatch({
        type: "SET_ERROR",
        payload: { errorMsg: "Invalid city name" },
      });
      return;
    }
    handleSearch(inputCity, dataDispatch);
    setInputCity("");
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow px-3 py-2 w-full max-w-md">
      <img src={SearchIcon} alt="Search-Icon" className="w-5 h-5 mr-2" />
      <input
        type="text"
        onChange={(e) => setInputCity(e.target.value.trim())}
        value={inputCity}
        placeholder="Search"
        className="flex-1 outline-none px-2 py-1 bg-transparent"
      />
      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default CardHeader;

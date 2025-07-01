import { apiFetch } from "./apiFetch";
import { ApiContext } from "../context/ApiContext";

export const handleSearch = async (inputCity, dataDispatch) => {
  try {
    if (!inputCity) {
      throw new Error("Please enter a city name");
    }
    const data = await apiFetch(inputCity, dataDispatch);

    dataDispatch({ type: "SET_CITY", payload: { city: inputCity } });

    let updatedData = {
      temp: data.current.temp_c.toFixed(1),
      humidity: data.current.humidity.toFixed(1),
      windSpeed: data.current.wind_kph,
    };
    dataDispatch({
      type: "SET_DATA",
      payload: updatedData,
    });
    dataDispatch({
      type: "SET_ICON",
      payload: updatedData,
    });
    console.log(
      data.current.temp_c,
      data.current.humidity,
      data.current.wind_kph
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    dataDispatch({ type: "SET_ERROR", payload: { errorMsg: 'Data not found for entered city.' } });
  }
};

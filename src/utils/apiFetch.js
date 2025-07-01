const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const apiFetch = async (location, dataDispatch) => {
  try {
    console.log(apiUrl, apiKey, location);
    const url = apiUrl
      .replace("<>API_KEY<>", apiKey)
      .replace("<>location<>", location);

    const response = await fetch(url);
    const data = await response.json();
    console.log(`Fetched data from ${url}:`, data);
    return data;
  } catch (error) {
    dataDispatch({ type: "SET_ERROR", payload: { error: error, errorMsg: "Data not found for entered city." } });
  }
};

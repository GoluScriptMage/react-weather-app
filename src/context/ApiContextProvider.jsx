import React, { useReducer } from "react";
import { initialState, dataReducer } from "./apiReducer";
import { ApiContext } from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  return (
    <ApiContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

import React, { useContext } from "react";
import CardHeader from "./components/CardHeader";
import Card from "./elements/Card";
import CardContent from "./components/CardContent";
import { ApiContext } from "./context/ApiContext";
import { handleDataToShow } from "./utils/handelDataToShow.jsx";

const App = () => {
  const { dataState } = useContext(ApiContext);

  return (
    <>
      <div className="flex justify-center items-start pt-8 min-h-screen bg-gray-100">
        <Card>
          <CardHeader />
          {handleDataToShow(dataState)}
        </Card>
      </div>
    </>
  );
};

export default App;

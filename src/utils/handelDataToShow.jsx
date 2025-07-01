import CardContent from "../components/CardContent";

export const handleDataToShow = (dataState) => {
  let dataToShow;
  console.log(`Error Message from the handle Show ${dataState.errorMsg}`);

  if (dataState.isSet && !dataState.error) {
    dataToShow = <CardContent />;
  } else if (dataState.error) {
    dataToShow = (
      <p className="text-red-500 text-lg mt-4 text-center">
        {dataState.errorMsg}
      </p>
    );
  } else if (!dataState.isSet) {
    dataToShow = (
      <p className="text-gray-400 text-lg mt-12 text-center">
        No data available
      </p>
    );
  }
  return dataToShow;
};

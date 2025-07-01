import { getIcon } from "../utils/IconsImports";

const currentDate = new Date().toLocaleDateString(undefined, {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const initialState = {
  data: {
    temp: 0,
    humidity: 0,
    windSpeed: 0,
  },
  city: "",
  icon: "",
  iconPath: "",
  isSet: false,
  error: false,
  errorMsg: "",
  currentDate,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      const { temp, humidity, windSpeed } = action.payload;

      return {
        ...state,
        data: {
          temp,
          humidity,
          windSpeed,
        },
        isSet: true,
        error: false,
        errorMsg: "",
      };
    }
    case "SET_ICON": {
      const { temp, humidity } = action.payload;

      let iconToSet = "";

      if (temp * 1 > 30) {
        iconToSet = "clear";
      } else if (temp * 1 < 30 && temp * 1 > 20) {
        iconToSet = "cloud";
      } else if (temp * 1 < 18) {
        iconToSet = "rain";
      } else if (temp * 1 < 2) {
        iconToSet = "snow";
      } else if (humidity * 1 > 80 && temp * 1 < 30 && temp * 1 > 15) {
        iconToSet = "drizzle";
      } else {
        iconToSet = "clear";
      }

      return {
        ...state,
        icon: iconToSet,
        iconPath: getIcon(iconToSet),
      };
    }
    case "SET_CITY": {
      const { city } = action.payload;
      return {
        ...state,
        city,
      };
    }
    case "SET_ERROR": {
      const { errorMsg } = action.payload;

      return {
        ...state,
        error: true,
        errorMsg,
      };
    }
  }

  return {
    ...state,
    data: {
      temp: 0,
      humidity: 0,
      windSpeed: 0,
    },
    setIcon: "",
    isLoding: false,
  };
};

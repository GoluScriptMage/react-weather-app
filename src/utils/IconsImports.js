import ClearIcon from "../Assets/clear.png";
import CloudIcon from "../Assets/cloud.png";
import RainIcon from "../Assets/rain.png";
import SnowIcon from "../Assets/snow.png";
import DrizzleIcon from "../Assets/drizzle.png";

const iconMap = {
  clear: ClearIcon,
  cloud: CloudIcon,
  rain: RainIcon,
  snow: SnowIcon,
  drizzle: DrizzleIcon,
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || ClearIcon;
};

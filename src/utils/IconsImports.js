import ClearIcon from "../assets/clear.png";
import CloudIcon from "../assets/cloud.png";
import RainIcon from "../assets/rain.png";
import SnowIcon from "../assets/snow.png";
import DrizzleIcon from "../assets/drizzle.png";

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

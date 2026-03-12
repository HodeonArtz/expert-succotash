import {
  IconArrowUpRight,
  IconCalendar,
  IconGraph,
  IconGrid3x3,
  IconHelp,
  IconLogout,
  IconMail,
  IconNotebook,
  IconNotification,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerStop,
  IconPlus,
  IconSearch,
  IconSettings,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";
import { SVGProps } from "react";

// Nota: poner como nombre de icono un nombre descriptivo y semántico (para según qué contexto, qué es o qué va a hacer)
export const iconsMap = {
  grid: IconGrid3x3,
  tasks: IconNotebook,
  calendar: IconCalendar,
  "analytic-graph": IconGraph,
  team: IconUsers,
  settings: IconSettings,
  help: IconHelp,
  logout: IconLogout,
  search: IconSearch,
  email: IconMail,
  notification: IconNotification,
  add: IconPlus,
  navigate: IconArrowUpRight,
  record: IconVideo,
  start: IconPlayerPlay,
  pause: IconPlayerPause,
  stop: IconPlayerStop,
};

export type IconName = keyof typeof iconsMap;

interface Props extends SVGProps<SVGSVGElement> {
  icon: IconName;
}

const Icon = ({ icon, ...props }: Props) => {
  const IconElement = iconsMap[icon];
  return <IconElement {...props} />;
};

export default Icon;

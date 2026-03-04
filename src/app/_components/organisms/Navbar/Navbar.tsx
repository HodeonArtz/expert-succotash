import { ReactNode } from "react";
import Heading from "../../atoms/heading/Heading";
import {
  IconCalendar,
  IconGraph,
  IconGrid4x4,
  IconNotebook,
  IconUsers,
} from "@tabler/icons-react";
import NavbarButton from "../../molecules/NavbarButton/NavbarButton";

import "./Navbar.css";

const navbarItems: {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}[] = [
  {
    icon: <IconGrid4x4 />,
    label: "Dashboard",
    isActive: true,
  },
  { icon: <IconNotebook />, label: "Tasks" },
  { icon: <IconCalendar />, label: "Calendar" },
  { icon: <IconGraph />, label: "Analytics" },
  { icon: <IconUsers />, label: "Team" },
];

const Navbar = () => {
  return (
    <section className="navbar">
      <Heading
        className="navbar__heading"
        tone="muted"
        weight="regular"
        size="sm"
      >
        Menu
      </Heading>
      <ul className="navbar__item-list">
        {navbarItems.map(({ icon, label, isActive }) => (
          <li className="navbar__item" key={label}>
            <NavbarButton leftSection={icon} isActive={isActive}>
              {label}
            </NavbarButton>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;

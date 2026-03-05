import { ReactNode } from "@tabler/icons-react";
import Heading from "../../atoms/heading/Heading";
import clsx from "clsx";

import "./NavbarButton.css";

interface Props {
  leftSection?: ReactNode;
  children?: ReactNode;
  isActive?: boolean;
}

const NavbarButton = ({ children, leftSection, isActive }: Props) => {
  return (
    <button
      className={clsx("navbar-button", {
        "navbar-button--active": isActive,
      })}
    >
      {leftSection && <figure>{leftSection}</figure>}
      <Heading weight={isActive ? "semibold" : "regular"} size="lg" as="h3">
        {children}
      </Heading>
    </button>
  );
};

export default NavbarButton;

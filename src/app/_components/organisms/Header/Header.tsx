import { ReactNode } from "react";

import "./Header.css";
import Heading from "../../atoms/heading/Heading";
import HeadingDescription from "../../atoms/heading-description/HeadingDescription";

interface Props {
  children?: string | ReactNode;
  description?: string | ReactNode;
  rightSection?: ReactNode;
}

const Header = ({ children, description, rightSection }: Props) => {
  return (
    <header className="header">
      <section className="header__title">
        <Heading as="h1" size="4xl">
          {children}
        </Heading>
        <HeadingDescription>{description}</HeadingDescription>
      </section>
      <section className="header__right-section">{rightSection}</section>
    </header>
  );
};

export default Header;

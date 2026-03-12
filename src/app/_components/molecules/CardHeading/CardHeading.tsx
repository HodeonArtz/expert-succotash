import { ReactNode } from "react";
import Heading from "../../atoms/heading/Heading";
import "./CardHeading.css";

export interface CardHeadingProps {
  children?: string | ReactNode;
  rightSection?: string | ReactNode;
}

const CardHeading = ({ children, rightSection }: CardHeadingProps) => {
  return (
    <header className="card-heading">
      <Heading as="h2">{children}</Heading>
      <div role="group" className="card-heading__right-section">
        {rightSection}
      </div>
    </header>
  );
};

export default CardHeading;

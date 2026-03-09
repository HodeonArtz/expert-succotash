import { ReactNode } from "react";

import "./HeadingDescription.css";

interface Props {
  children?: string | ReactNode;
}

const HeadingDescription = ({ children }: Props) => {
  return <p className="heading-description">{children}</p>;
};

export default HeadingDescription;

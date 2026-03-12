import { ReactNode } from "react";
import "./DashboardCell.css";
import CardHeading from "../../molecules/CardHeading/CardHeading";

interface Props {
  label?: string | ReactNode;
  rightSection?: string | ReactNode;
  children?: string | ReactNode;
}

const DashboardCell = ({ children, label, rightSection }: Props) => {
  return (
    <article className="dashboard-cell">
      <CardHeading rightSection={rightSection}>{label}</CardHeading>
      <div className="dashboard-cell__content">{children}</div>
    </article>
  );
};

export default DashboardCell;

import { type ReactNode } from "react";
import clsx from "clsx";
import "./Heading.css";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "title" | "section" | "card" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
  tone?: "default" | "muted" | "primary" | "danger";
  align?: "left" | "center" | "right";
  truncate?: boolean;
  children: ReactNode;
  className?: string;
};

const Heading = ({
  as: Tag = "h2",
  variant = "section",
  size,
  weight = "semibold",
  tone = "default",
  align = "left",
  truncate = false,
  children,
  className,
}: HeadingProps) => {
  const classes = clsx(
    "heading",
    `heading--${variant}`,
    size && `heading--${size}`,
    `heading--${weight}`,
    `heading--${tone}`,
    `heading--${align}`,
    { "heading--truncate": truncate },
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;

import { ReactNode } from "react";
import { Button, ButtonProps } from "../../atoms/button/Button";

import "./IconButton.css";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface Props extends ButtonProps {
  leftSection?: string | ReactNode;
  rightSection?: string | ReactNode;
}

const iconButtonVariants = cva("icon-button", {
  variants: {
    leftSection: {
      false: null,
      true: "icon-button--show-left",
    },
    rightSection: {
      false: null,
      true: "icon-button--show-right",
    },
  },
  defaultVariants: { leftSection: false, rightSection: false },
});

const IconButton = ({
  leftSection,
  rightSection,
  children,
  className,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      className={cn(
        iconButtonVariants({
          leftSection: leftSection !== undefined,
          rightSection: rightSection !== undefined,
          className,
        }),
      )}
    >
      <span className="icon-button__left-section">{leftSection}</span>
      {children}
      <span className="icon-button__right-section">{rightSection}</span>
    </Button>
  );
};

export default IconButton;

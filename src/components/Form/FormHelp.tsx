import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
  message?: React.ReactNode;
}

function FormHelp({ className, children, position = "top", message }: Props) {
  const classes = cn("form-help", className);
  return (
    // @ts-ignore
    <span
      className={classes}
      dataContent={message}
      dataToggle="popover"
      dataPlacement={position}
    >
      {children || "?"}
    </span>
  );
}



export default FormHelp;

import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface FormHelpProps
  extends TablerComponent,
    HTMLAttributes<HTMLSpanElement> {
  position?: "top" | "bottom";
  message?: React.ReactNode;
}

function FormHelp({
  className,
  children,
  position = "top",
  message,
  ...rest
}: FormHelpProps) {
  const classes = cn("form-help", className);
  return (
    <El.Span
      className={classes}
      // dataContent={message}
      // dataToggle="popover"
      // dataPlacement={position}
      {...rest}
    >
      {children || "?"}
    </El.Span>
  );
}

export default FormHelp;

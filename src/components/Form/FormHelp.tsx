import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormHelpProps extends TablerComponentProps<"span"> {
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

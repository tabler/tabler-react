import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import { colors } from "../../colors";

interface Props extends ELProps {
  color?: colors;
  bookmark?: boolean;
}

function Ribbon({ children, className, color, bookmark, ...rest }: Props) {
  const _className = cn(
    "ribbon",
    { [`bg-${color}`]: color, "ribbon-bookmark": bookmark },
    className
  );
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
}

/** @component */
export default Ribbon;

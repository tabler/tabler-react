import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import { colors } from "../../colors";
import Icon from "../Icon";

interface Props extends ELProps {
  color?: colors;
  bookmark?: boolean;
  icon?: string;
}

function Ribbon({
  children,
  className,
  color,
  icon,
  bookmark,
  ...rest
}: Props) {
  const _className = cn(
    "ribbon",
    { [`bg-${color}`]: color, "ribbon-bookmark": bookmark },
    className
  );
  return (
    <El.Div className={_className} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </El.Div>
  );
}

/** @component */
export default Ribbon;

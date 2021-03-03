import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";
import { colors } from "../../colors";
import Icon from "../Icon";

interface Props extends TablerComponentProps {
  color?: colors;
  bookmark?: boolean;
  icon?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

function Ribbon({
  children,
  className,
  color,
  icon,
  bookmark,
  position,
  ...rest
}: Props) {
  const _className = cn(
    "ribbon",
    {
      [`bg-${color}`]: color,
      "ribbon-bookmark": bookmark,
      "ribbon-top": position && position.substr(0, 3) === "top",
      "ribbon-bottom": position && position.substr(0, 6) === "bottom",
      "ribbon-left": position && position.substr(-4) === "left",
      "ribbon-right": position && position.substr(-5) === "right",
    },
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

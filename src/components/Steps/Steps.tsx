import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import { colors } from "../../colors";

export interface Props extends ELProps {
  color?: colors;
  counter?: boolean;
}

export const Steps = function({
  children,
  className,
  color,
  counter,
  ...rest
}: Props) {
  const _className = cn(
    "steps",
    {
      [`steps-${color}`]: color,
      "steps-counter": counter,
    },
    className
  );
  return (
    <El.Div p={6} className={_className} {...rest}>
      {children}
    </El.Div>
  );
};

/** @component */
export default Steps;

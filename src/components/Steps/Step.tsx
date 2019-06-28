import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import { colors } from "../../colors";
import Tooltip from "../Tooltip";

export interface Props extends ELProps {
  color?: colors;
  active?: boolean;
  tooltip?: string;
}

export const Step = function({
  children,
  className,
  active,
  tooltip,
  ...rest
}: Props) {
  const _className = cn(
    "step-item",
    {
      active,
    },
    className
  );

  const component = (
    <El.Span className={_className} {...rest}>
      {children}
    </El.Span>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} placement="top" arrow={false}>
        {component}
      </Tooltip>
    );
  }

  return component;
};

/** @component */
export default Step;

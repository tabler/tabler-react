import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";

export interface ToastBodyProps extends TablerComponentProps {}

export const ToastBody = function ({
  children,
  className,
  ...rest
}: ToastBodyProps) {
  const _className = cn("toast-body", className);
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
};

/** @component */
export default ToastBody;

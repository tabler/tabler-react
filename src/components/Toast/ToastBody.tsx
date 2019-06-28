import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";

export interface ToastBodyProps extends ELProps {}

export const ToastBody = function({
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

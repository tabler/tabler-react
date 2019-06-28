import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import ToastHeader, { ToastHeaderProps } from "./ToastHeader";
import ToastBody from "./ToastBody";

export interface ToastProps extends ELProps {
  show?: boolean;
  header?: ToastHeaderProps;
  body?: React.ReactNode;
}

export const Toast = function({
  children,
  className,
  show,
  header,
  body,
  ...rest
}: ToastProps) {
  const _className = cn(
    "toast",
    {
      show,
    },
    className
  );
  return (
    <El.Div
      className={_className}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...rest}
    >
      {header && <ToastHeader {...header} />}
      {body && <ToastBody>{body}</ToastBody>}
      {children}
    </El.Div>
  );
};

/** @component */
export default Toast;

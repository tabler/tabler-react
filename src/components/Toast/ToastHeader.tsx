import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";
import Avatar from "../Avatar";
import { Button } from "../Button";

export interface ToastHeaderProps extends TablerComponentProps {
  avatar?: string;
  title?: string;
  timestamp?: string;
}

export const ToastHeader = function ({
  children,
  className,
  avatar,
  title,
  timestamp,
  ...rest
}: ToastHeaderProps) {
  const _className = cn("toast-header", className);
  return (
    <El.Div className={_className} {...rest}>
      {avatar && <Avatar size="sm" me={2} imageURL={avatar} />}
      {title && <strong className="mr-auto">{title}</strong>}
      {timestamp && <small>11 mins ago</small>}
      <Button ms={2} className="close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </Button>
      {children}
    </El.Div>
  );
};

/** @component */
export default ToastHeader;

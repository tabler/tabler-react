import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";

interface Props extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

function MediaContent({ className, children, ...rest }: Props) {
  const classes = cn("media-content", className);

  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default MediaContent;

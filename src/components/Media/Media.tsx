import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";

interface Props
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  rounded?: boolean;
  aspectRatio?: "2x1" | "3x4";
}

function Media({ className, children, rounded, aspectRatio, ...rest }: Props) {
  const classes = cn(
    "media",
    { rounded, [`media-${aspectRatio}`]: aspectRatio },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Media;

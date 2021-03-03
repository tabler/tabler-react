import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface LoaderProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function Loader({ className, children, ...rest }: LoaderProps) {
  const classes = cn({ loader: true }, className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Loader;

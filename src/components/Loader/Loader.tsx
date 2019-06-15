import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface LoaderProps extends ELProps<HTMLDivElement> {}

function Loader({ className, children, ...rest }: LoaderProps) {
  const classes = cn({ loader: true }, className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Loader;

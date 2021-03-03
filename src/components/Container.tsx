import React from "react";

import { ELProps } from "../helpers/makeHtmlElement";
import El from "./El/El";
import { HTMLPropsWithoutRef } from "../types";

export interface ContainerProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function Container({ children, ...rest }: ContainerProps) {
  return (
    <El.Div classNames="container" {...rest}>
      {children}
    </El.Div>
  );
}

export default Container;

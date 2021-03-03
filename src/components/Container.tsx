import React from "react";

import El from "./El/El";
import { HTMLPropsWithoutRef } from "../types";
import { TablerComponentProps } from "../helpers/createTablerElement";

export interface ContainerProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function Container({ children, ...rest }: ContainerProps) {
  return (
    <El.Div classNames="container" {...rest}>
      {children}
    </El.Div>
  );
}

export default Container;

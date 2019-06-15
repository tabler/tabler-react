import React from "react";

import "./Container.css";
import { ELProps } from "../helpers/makeHtmlElement";
import El from "./El/El";

export interface ContainerProps extends ELProps<HTMLDivElement> {}

function Container({ children, ...rest }: ContainerProps) {
  return (
    <El.Div classNames="container" {...rest}>
      {children}
    </El.Div>
  );
}

export default Container;

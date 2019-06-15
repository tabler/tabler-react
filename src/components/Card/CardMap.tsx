import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface CardMapProps extends ELProps<HTMLDivElement> {
  placeholder?: string;
}

function CardMap({ className, children, placeholder, ...rest }: CardMapProps) {
  const classes = cn(
    "card-map",
    { "card-map-placeholder": placeholder },
    className
  );
  return (
    <El.Div
      className={classes}
      style={placeholder ? { backgroundImage: `url(${placeholder})` } : {}}
      {...rest}
    >
      {children}
    </El.Div>
  );
}

export default CardMap;

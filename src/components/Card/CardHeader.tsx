import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardHeaderProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  backgroundURL?: string;
}

function CardHeader({
  className,
  children,
  backgroundURL = "",
  ...rest
}: CardHeaderProps) {
  const classes = cn("card-header", className);

  return (
    <El.Div
      className={classes}
      style={
        backgroundURL
          ? Object.assign({
              backgroundImage: `url(${backgroundURL})`,
            })
          : null
      }
      {...rest}
    >
      {children}
    </El.Div>
  );
}

export default CardHeader;

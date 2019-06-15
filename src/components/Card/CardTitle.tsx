import * as React from "react";
import cn from "classnames";
import { HeaderProps } from "../Header/Header";
import El from "../El/El";

export interface CardTitleProps extends HeaderProps {}

function CardTitle({
  className,
  children,
  as: Component = El.H3,
  ...rest
}: CardTitleProps) {
  const classes = cn("card-title", className);
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default CardTitle;

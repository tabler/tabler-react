import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface PageProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {}

function Page({ className, children, ...rest }: PageProps) {
  const classes = cn("page d-flex h-auto min-h-screen", className);
  return (
    <El.Div className={classes} {...rest}>
      <div className="d-flex flex-fill">{children}</div>
    </El.Div>
  );
}

export default Page;

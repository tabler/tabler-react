import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface PageProps extends ELProps<HTMLDivElement> {}

function Page({ className, children, ...rest }: PageProps) {
  const classes = cn("page d-flex h-auto min-h-screen", className);
  return (
    <El.Div className={classes} {...rest}>
      <div className="d-flex flex-fill">
        <div className="main-content flex-fill d-flex flex-column max-w-full">
          {children}
        </div>
      </div>
    </El.Div>
  );
}

export default Page;

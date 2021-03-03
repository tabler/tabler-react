import * as React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

interface PageTitleProps extends TablerComponentProps {}

function PageTitle({ className, children, ...rest }: PageTitleProps) {
  const classes = cn("page-title-box", className);
  return (
    <El.Div className={classes} {...rest}>
      <El.H1 className="page-title">{children}</El.H1>
    </El.Div>
  );
}

export default PageTitle;

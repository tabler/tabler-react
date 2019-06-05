import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Page({ className, children }: Props) {
  const classes = cn("page", className);
  return <div className={classes}>{children}</div>;
}

export default Page;

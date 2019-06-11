import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Loader({ className, children }: Props) {
  const classes = cn({ loader: true }, className);
  return <div className={classes}>{children}</div>;
}



export default Loader;

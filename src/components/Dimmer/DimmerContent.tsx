import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function DimmerContent({ className, children }: Props) {
  const classes = cn({ "dimmer-content": true }, className);
  return <div className={classes}>{children}</div>;
}

DimmerContent.displayName = "Dimmer.Content";

export default DimmerContent;

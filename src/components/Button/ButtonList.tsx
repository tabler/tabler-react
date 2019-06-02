import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  align?: "" | "left" | "center" | "right";
}

function ButtonList({ className, children, align = "", ...props }: Props) {
  const classes = cn(
    { "btn-list": true, [`text-${align}`]: !!align },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ButtonList.displayName = "Button.List";

export default ButtonList;

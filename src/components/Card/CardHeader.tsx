import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  backgroundURL?: string;
}

function CardHeader({ className, children, backgroundURL = "" }: Props) {
  const classes = cn("card-header", className);

  return (
    <div
      className={classes}
      style={
        backgroundURL
          ? Object.assign({
              backgroundImage: `url(${backgroundURL})`,
            })
          : null
      }
    >
      {children}
    </div>
  );
}



export default CardHeader;

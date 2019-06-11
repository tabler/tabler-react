import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Page({ className, children }: Props) {
  const classes = cn("page d-flex h-auto min-h-screen", className);
  return (
    <div className={classes}>
      <div className="d-flex flex-fill">
        <div className="main-content flex-fill d-flex flex-column max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Page;

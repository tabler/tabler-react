import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageMain({ children }: Props) {
  return (
    <div className="page-main flex-fill d-flex flex-column max-w-full">
      {children}
    </div>
  );
}

export default PageMain;

// @flow

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageMain({ children }: Props) {
  return (
    <div className="page-main main-content flex-fill d-flex flex-column max-w-full">
      {children}
    </div>
  );
}

PageMain.displayName = "Page.Main";

export default PageMain;

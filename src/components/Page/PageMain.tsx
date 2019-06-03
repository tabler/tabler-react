// @flow

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageMain({ children }: Props) {
  return <div className={"page-main"}>{children}</div>;
}

PageMain.displayName = "Page.Main";

export default PageMain;

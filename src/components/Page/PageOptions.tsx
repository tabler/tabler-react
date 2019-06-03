import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageOptions({ children }: Props) {
  return <div className="page-options d-flex">{children}</div>;
}

PageOptions.displayName = "Page.Options";

export default PageOptions;

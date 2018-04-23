// @flow

import * as React from "react";
import PageTitle from "./PageTitle.react";

type Props = {|
  +children?: React.Node,
|};

function PageHeader({ children }: Props): React.Node {
  return (
    <div className="page-header">
      <PageTitle>{children}</PageTitle>
    </div>
  );
}

PageHeader.displayName = "Page.Header";

export default PageHeader;

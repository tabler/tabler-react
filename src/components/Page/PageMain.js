// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node
|};

const PageMain = (props: Props): React.Node => (
  <div className={"page-main"} {...props} />
);

export default PageMain;

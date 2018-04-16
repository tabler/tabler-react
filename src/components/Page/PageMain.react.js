// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function PageMain({ children, ...props }: Props): React.Node {
  return (
    <div className={"page-main"} {...props}>
      {children}
    </div>
  );
}

export default PageMain;

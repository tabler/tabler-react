// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error403(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="403"
      subtitle="Oops... You just found an error page..."
      details="We are sorry but you do not have permission to access this page..."
    />
  );
}

export default Error403;

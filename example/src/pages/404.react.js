// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error404(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="404"
      subtitle="Oops... You just found an error page..."
      details="We are sorry but our service is currently not available..."
    />
  );
}

export default Error404;

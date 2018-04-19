// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error401(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="401"
      subtitle="Oops... You just found an error page..."
      details="We are sorry but you are not authorized to access this page..."
    />
  );
}

export default Error401;

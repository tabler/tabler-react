// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error503(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="503"
      subtitle="Oops... You just found an error page..."
      details="This page is temporarily unavailable.  Please reload your browser..."
    />
  );
}

export default Error503;

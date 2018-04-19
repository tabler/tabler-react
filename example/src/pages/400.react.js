// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error400(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="400"
      subtitle="Oops... You just found an error page..."
      details="We are sorry but your request contains bad syntax and cannot be fulfilled..."
    />
  );
}

export default Error400;

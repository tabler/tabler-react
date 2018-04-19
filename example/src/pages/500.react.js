// @flow

import * as React from "react";

import { DefaultErrorPage } from "tabler-react";

type Props = {||};

function Error500(props: Props): React.Node {
  return (
    <DefaultErrorPage
      title="500"
      subtitle="Oops... You just found an error page..."
      details="We are sorry but your request contains bad syntax and cannot be fulfilled..."
    />
  );
}

export default Error500;

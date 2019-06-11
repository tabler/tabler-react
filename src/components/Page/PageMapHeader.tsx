// @flow

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageMapHeader({ children }: Props) {
  return <div className="map-header">{children}</div>;
}



export default PageMapHeader;

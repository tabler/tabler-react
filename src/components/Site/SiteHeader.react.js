// @flow

import * as React from "react";
import { Container } from "../";

type Props = {|
  +children?: React.Node,
|};

const SiteHeader = ({ children }: Props): React.Node => (
  <div className="header py-4">
    <Container>
      <div className="d-flex">{children}</div>
    </Container>
  </div>
);

SiteHeader.displayName = "Site.Header";

export default SiteHeader;

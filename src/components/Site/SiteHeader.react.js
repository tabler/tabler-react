// @flow

import * as React from "react";
import { Container } from "../";

type Props = {|
  +children?: React.Node
|};

const SiteHeader = ({ children }: Props): React.Node => (
  <div className="header">
    <Container>{children}</Container>
  </div>
);

export default SiteHeader;

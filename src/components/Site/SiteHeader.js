// @flow

import * as React from "react";
import { Container } from "../";

type Props = {|
  +children?: React.Node
|};

const SiteHeader = ({ children, ...rest }: Props): React.Node => (
  <div className="header" {...rest}>
    <Container>{children}</Container>
  </div>
);

export default SiteHeader;

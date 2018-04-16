// @flow

import * as React from "react";
import { Container } from "../";

type Props = {|
  +children?: React.Node,
|};

const PageContent = ({ children, ...rest }: Props): React.Node => (
  <div className="page-content">
    <Container>{children}</Container>
  </div>
);

export default PageContent;

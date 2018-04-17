// @flow

import * as React from "react";
import { Container, Header } from "../";

type Props = {|
  +children?: React.Node,
|};

const SiteNav = (props: Props): React.Node => (
  <div className="header-nav d-none d-lg-flex">
    <Container>{props.children}</Container>
  </div>
);
export default SiteNav;

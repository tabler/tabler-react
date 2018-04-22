// @flow

import * as React from "react";
import { Container } from "../";

type Props = {|
  +children?: React.Node,
|};

const SiteNav = (props: Props): React.Node => (
  <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
    <Container>{props.children}</Container>
  </div>
);
export default SiteNav;

// @flow

import * as React from "react";
import { Page, Grid } from "../";

type Props = {|
  +children?: React.Node,
  +header?: React.Node,
  +sidebar?: React.Node,
|};

function PageContentWithSidebar({
  children,
  header,
  sidebar,
}: Props): React.Node {
  return (
    <Page.Content>
      {header}
      <Grid.Row>
        <Grid.Col lg={3} className="order-lg-1 mb-4">
          {sidebar}
        </Grid.Col>
        <Grid.Col lg={9}>{children}</Grid.Col>
      </Grid.Row>
    </Page.Content>
  );
}

PageContentWithSidebar.displayName = "Page.ContentWithSidebar";

export default PageContentWithSidebar;

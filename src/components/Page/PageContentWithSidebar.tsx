// @flow

import * as React from "react";
import PageContent from "./PageContent";
import Grid from "../Grid";

type Props = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
};

function PageContentWithSidebar({ children, header, sidebar }: Props) {
  return (
    <PageContent>
      {header}
      <Grid.Row>
        <Grid.Col lg={3} className="order-lg-1 mb-4">
          {sidebar}
        </Grid.Col>
        <Grid.Col lg={9}>{children}</Grid.Col>
      </Grid.Row>
    </PageContent>
  );
}



export default PageContentWithSidebar;

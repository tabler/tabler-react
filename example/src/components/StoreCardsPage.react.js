// @flow

import * as React from "react";

import { Page, Grid, StoreCard } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function StoreCardsPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content>
        <Page.Header>Store Components</Page.Header>
        <Grid.Row>
          <Grid.Col lg={3}>
            <StoreCard
              title="Apple iPhone 7 Plus 256GB Red Special Edition"
              subtitle="Apple"
              price="$499"
              imgUrl="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default StoreCardsPage;

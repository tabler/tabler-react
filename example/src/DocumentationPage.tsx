import React from "react";
import SiteWrapper from "./SiteWrapper";
import { Page, Grid, List, Card } from "tabler-react";

export interface DocumentationPageProps {}

const DocumentationPage = function({  }: DocumentationPageProps) {
  return (
    <SiteWrapper>
      <Page.Content title="Documentation">
        <Grid.Row>
          <Grid.Col lg={3} orderLg={1}>
            <List.Group transparent>
              <List.GroupItem action>Alerts</List.GroupItem>
              <List.GroupItem action active>
                Avatars
              </List.GroupItem>
            </List.Group>
          </Grid.Col>
          <Grid.Col lg={9}>
            <Card>
              <Card.Body p={{ lg: 8 }}>Content</Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
};

export default DocumentationPage;

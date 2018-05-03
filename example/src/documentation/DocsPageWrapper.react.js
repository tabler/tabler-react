// @flow
import * as React from "react";

import { Page, Card, Text } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";
import Sidebar from "./DocsSidebar.react";

type Props = {| +children?: React.Node |};

function DocsPageWrapper(props: Props) {
  const { children } = props;
  return (
    <SiteWrapper>
      <Page.ContentWithSidebar
        header={<Page.Header title="Documentation" />}
        sidebar={<Sidebar />}
      >
        <Card>
          <Card.Body>
            <Text wrap>{children}</Text>
          </Card.Body>
        </Card>
      </Page.ContentWithSidebar>
    </SiteWrapper>
  );
}
export default DocsPageWrapper;

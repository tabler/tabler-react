// @flow

import * as React from "react";

import { Container, Button, Page, Icon, Header } from "tabler-react";

type Props = {||};

function Error503(props: Props): React.Node {
  return (
    <Page className="text-center">
      <Container>
        <Header.H1 className="display-1 text-muted mb-5">
          <Icon className="si si-exclamation" />
          503
        </Header.H1>
        <Header.H2>Oops.. You just found an error page..</Header.H2>
        <Header.H4 className="text-muted font-weight-normal mb-7">
          This page is temporarily unavailable. Please reload your
          browser.&hellip;
        </Header.H4>
        <Button className="btn-primary">
          <Icon className="fe fe-arrow-left mr-2" />
          Go back
        </Button>
      </Container>
    </Page>
  );
}

export default Error503;

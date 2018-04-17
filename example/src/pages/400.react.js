// @flow

import * as React from "react";

import { Container, Button, Page } from "tabler-react";

type Props = {||};

function error400(props: Props): React.Node {
  return (
    <Page>
      <Container className="text-center">
        <div className="display-1 text-muted mb-5">
          <i class="si si-exclamation" />400
        </div>
        <div className="h2 mb-3">Oops.. You just found an error page...</div>
        <div className="h4 text-muted font-weight-normal mb-7">
          We are sorry but your request contains bad syntax and cannot be
          fulfilled&hellip;
        </div>
        <Button className="btn btn-primary">
          <i class="fe fe-arrow-left mr-2" />
          Go Back
        </Button>
      </Container>
    </Page>
  );
}

export default error400;

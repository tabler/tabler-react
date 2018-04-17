// @flow

import * as React from "react";

import { Container, Button, Page } from "tabler-react";

type Props = {||};

function error403(props: Props): React.Node {
  return (
    <Page>
      <Container className="text-center">
        <div className="display-1 text-muted mb-5">
          <i class="si si-exclamation" />403
        </div>
        <div className="h2 mb-3">Oops.. You just found an error page...</div>
        <div className="h4 text-muted font-weight-normal mb-7">
          We are sorry but you do not have permission to access this
          page&hellip;
        </div>
        <Button className="btn btn-primary">
          <i class="fe fe-arrow-left mr-2" />
          Go Back
        </Button>
      </Container>
    </Page>
  );
}

export default error403;

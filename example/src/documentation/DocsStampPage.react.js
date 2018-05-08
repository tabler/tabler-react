// @flow

import * as React from "react";

import { Header, Stamp, StampCard } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsStampPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Stamps</Header.H2>

      <Header.H3>Basic Stamp</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Stamp size="sm" className="mr-1">
            A
          </Stamp>
          <Stamp className="mr-1">B</Stamp>
          <Stamp color="primary" className="mr-1">
            C
          </Stamp>
          <Stamp color="orange" icon="globe" />
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Stamp Card</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <StampCard header="Headline" footer="Something Else" color="yellow" />
          <StampCard icon="check" color="green">
            Success!
          </StampCard>
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsStampPage;

// @flow

import * as React from "react";

import { Header, Badge } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsBadgePage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Badges</Header.H2>

      <ComponentDemo>
        <React.Fragment>
          <Badge color="primary" className="mr-1">
            primary
          </Badge>
          <Badge color="secondary" className="mr-1">
            secondary
          </Badge>
          <Badge color="info" className="mr-1">
            info
          </Badge>
          <Badge color="warning" className="mr-1">
            warning
          </Badge>
          <Badge color="success" className="mr-1">
            success
          </Badge>
          <Badge color="danger" className="mr-1">
            danger
          </Badge>
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsBadgePage;

import React from "react";

import { Site } from "tabler-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

type Props = {
  children: React.ReactNode;
};

type State = {
  notificationsObjects: any[];
};

class SiteWrapper extends React.Component<Props, State> {
  render() {
    return (
      <Site.Wrapper
        header={SiteHeader}
        nav={SiteNav}
        navIsSide={true}
        footer={SiteFooter}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;

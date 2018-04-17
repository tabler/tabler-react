// @flow

import * as React from "react";
import { Container, Button, Page, Header, Nav, Dropdown, Avatar, Icon, Site} from "tabler-react";
import tablerLogo from '../images/brand/tabler.svg'

type Props = {||};

function Empty(props: Props): React.Node {
  return (
      <Site.Header className="py-4">
        <div className='d-flex'>
          <Site.Logo src={tablerLogo} href="/"/>
          <div className="d-flex order-lg-2 ml-auto">
            <Site.Navbar>
              <Button className="btn-sm btn-outline-primary">Source code</Button>
            </Site.Navbar>
          </div>
        </div>
      </Site.Header>
  );
}

export default Empty;

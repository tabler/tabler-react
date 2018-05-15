// @flow

import * as React from "react";
import { Container, Grid, Nav, InlineSearchForm } from "../../";

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

type navItems = Array<navItem>;

export type Props = {|
  +children?: React.Node,
  +items?: React.ChildrenArray<React.Element<typeof Nav.Item>>,
  +itemsObjects?: navItems,
  /**
   * Display a search form to the right of the nav items
   */
  +withSearchForm?: boolean,
  /**
   * Provide your own component to replace the search form
   */
  +rightColumnComponent?: React.Node,
|};

const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
}: Props): React.Node => (
  <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
    <Container>
      {children || (
        <Grid.Row className="align-items-center">
          <Grid.Col lg={3} className="ml-auto">
            {rightColumnComponent || (withSearchForm && <InlineSearchForm />)}
          </Grid.Col>
          <Grid.Col className="col-lg order-lg-first">
            <Nav
              tabbed
              className="border-0 flex-column flex-lg-row"
              items={items}
              itemsObjects={itemsObjects}
            />
          </Grid.Col>
        </Grid.Row>
      )}
    </Container>
  </div>
);

SiteNav.displayName = "Site.Nav";

export default SiteNav;

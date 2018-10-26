// @flow

import * as React from "react";
import cn from "classnames";
import { Container, Grid, Nav } from "../../";

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
  +collapse?:true,
  /**
   * Display a search form to the right of the nav items
   */
  +withSearchForm?: boolean,
  /**
   * Provide your own component to replace the search form
   */
  +rightColumnComponent?: React.Node,
  /**
   * Toggle the collapsed state of the nav
   */
  +collapse?: boolean,
  +routerContextComponentType?: React.ElementType,
|};

const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
  collapse = true,
  routerContextComponentType,
}: Props): React.Node => {
  const classes = cn("header d-lg-flex p-0", { collapse });
  return (
    <div className={classes}>
      <Container>
        {children || (
          <Grid.Row className="align-items-center">
            <Grid.Col lg={3} className="ml-auto" ignoreCol={true}>
              {/* @TODO: add InlineSearchForm  */}
              {/* {rightColumnComponent || (withSearchForm && <InlineSearchForm />)} */}
              {rightColumnComponent}
            </Grid.Col>
            <Grid.Col className="col-lg order-lg-first">
              <Nav
                tabbed
                className="border-0 flex-column flex-lg-row"
                items={items}
                itemsObjects={itemsObjects}
                routerContextComponentType={routerContextComponentType}
              />
            </Grid.Col>
          </Grid.Row>
        )}
      </Container>
    </div>
  );
};

SiteNav.displayName = "Site.Nav";

export default SiteNav;

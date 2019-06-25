import * as React from "react";
import cn from "classnames";

import Container from "../Container";
import Nav from "../Nav";
import { NavItemProps } from "../Nav/NavItem";

export interface SiteNavProps {
  children?: React.ReactNode;
  items?: React.ReactNode;
  itemsObjects?: NavItemProps[];
  /**
   * Display a search form to the right of the nav items
   */
  withSearchForm?: boolean;
  /**
   * Provide your own component to replace the search form
   */
  rightColumnComponent?: React.ReactNode;
  /**
   * Toggle the collapsed state of the nav
   */
  collapse?: boolean;
  routerContextComponentType?: React.ElementType;
}

const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
  collapse = false,
  routerContextComponentType,
}: SiteNavProps) => {
  const classes = cn("navbar navbar-expand-md", { collapse: collapse });
  return (
    <header className={classes}>
      <Container>
        {children || (
          <React.Fragment>
            <Nav
              className="navbar-nav"
              items={items}
              itemsObjects={itemsObjects}
              routerContextComponentType={routerContextComponentType}
            />
            {rightColumnComponent}
          </React.Fragment>
        )}
      </Container>
    </header>
  );
};

export default SiteNav;

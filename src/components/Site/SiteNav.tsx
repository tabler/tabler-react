import * as React from "react";
import cn from "classnames";

import Container from "../Container";
import Nav from "../Nav";
import { NavItemProps } from "../Nav/NavItem";
import El from "../El";
import { NavBarProps } from "../Nav/NavBar";
import SiteLogo from "../Site/SiteLogo";
import { string } from "prop-types";
3;
export interface SiteNavProps extends NavBarProps {
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
  logoURL?: string;
}

const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
  collapse = false,
  routerContextComponentType,
  logoURL,
  ...rest
}: SiteNavProps) => {
  const classes = cn({ collapse: collapse });

  const _children = (
    <React.Fragment>
      {(items || itemsObjects) && (
        <Nav
          className="navbar-nav"
          items={items}
          itemsObjects={itemsObjects}
          routerContextComponentType={routerContextComponentType}
        />
      )}
      {children}
      {rightColumnComponent}
    </React.Fragment>
  );

  if (rest.isSide) {
    return (
      <Nav.Bar expand="md" className={classes} {...rest}>
        {logoURL && (
          <El.Div p={3}>
            <SiteLogo src={logoURL} />
          </El.Div>
        )}
        {_children}
      </Nav.Bar>
    );
  }
  return (
    <Nav.Bar expand="md" className={classes} {...rest}>
      <Container>
        {logoURL && <SiteLogo src={logoURL} />}
        {_children}
      </Container>
    </Nav.Bar>
  );
};

export default SiteNav;

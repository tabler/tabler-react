import React, { useState } from "react";
import cn from "classnames";
import NavItem, { NavItemProps } from "./NavItem";
import { TablerComponent } from "../../types";
import { NavSubItemProps } from "./NavSubItem";
import El from "../El/El";

export interface NavProps extends TablerComponent {
  as?: React.ElementType;
  tabbed?: boolean;
  /**
   * @deprecated use children instead
   */
  items?: React.ReactElement<NavItemProps> | React.ReactElement<NavItemProps>[];
  itemsObjects?: Array<NavItemProps>;
  routerContextComponentType?: any;
}

const Nav = function({
  as: Component = El.Ul,
  className,
  children,
  tabbed = false,
  items,
  itemsObjects,
  routerContextComponentType,
  ...rest
}: NavProps) {
  const [pathName, setPathName] = useState("");

  const routerCallback = (location: { pathname: string }): any => {
    setPathName(location.pathname);
  };

  const computeActive = (
    initialValue?: boolean,
    to?: string,
    subItems?: Array<NavSubItemProps> | any
  ): boolean => {
    if (
      initialValue !== null &&
      initialValue !== undefined &&
      initialValue === true
    ) {
      return true;
    }

    if (to !== null && to !== undefined && to === pathName) {
      return true;
    }

    if (
      subItems !== null &&
      subItems !== undefined &&
      Array.isArray(subItems)
    ) {
      if (
        subItems.find(
          item =>
            item.to !== null && item.to !== undefined && item.to === pathName
        )
      ) {
        return true;
      }
    }

    return false;
  };

  const classes = cn(
    { nav: true, "navbar-menu": true, "nav-tabs": tabbed },
    className
  );

  let element: null | React.ReactElement<any> = null;
  if (routerContextComponentType) {
    const routerContextComponentFactory = React.createFactory(
      routerContextComponentType
    );
    element = routerContextComponentFactory({
      callback: routerCallback,
    } as any);
  }

  const _items =
    items ||
    (itemsObjects &&
      itemsObjects.map(({ subItems, active, ...rest }, i) => (
        <NavItem
          key={i}
          hasSubNav={!!subItems}
          subItemsObjects={subItems}
          active={computeActive(active, rest.to, subItems)}
          {...rest}
        />
      )));
  const _children = _items || children;

  return (
    <React.Fragment>
      {element}
      <Component className={classes}>{_children}</Component>
    </React.Fragment>
  );
};

export default Nav;

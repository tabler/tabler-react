import React, { useState } from "react";
import cn from "classnames";
import NavItem from "./NavItem";

export type subNavItem = {
  value: string;
  to?: string;
  icon?: string;
  LinkComponent?: React.ElementType;
  useExact?: boolean;
};

type navItem = {
  value: string;
  to?: string;
  icon?: string;
  active?: boolean;
  LinkComponent?: React.ElementType;
  subItems?: Array<subNavItem>;
  useExact?: boolean;
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  tabbed?: boolean;
  /**
   * @deprecated use children instead
   */
  items?:
    | React.ReactElement<typeof NavItem>
    | React.ReactElement<typeof NavItem>[];
  itemsObjects?: Array<navItem>;
  routerContextComponentType?: any;
}

type State = {
  pathName?: string | null;
};

const Nav = function({
  className,
  children,
  tabbed = true,
  items,
  itemsObjects,
  routerContextComponentType,
}: Props) {
  const [pathName, setPathName] = useState("");

  const routerCallback = (location: { pathname: string }): any => {
    setPathName(location.pathname);
  };

  const computeActive = (
    initialValue?: boolean,
    to?: string,
    subItems?: Array<subNavItem>
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

    if (subItems !== null && subItems !== undefined) {
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

  const classes = cn({ nav: true, "nav-tabs": tabbed }, className);

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
      <ul className={classes}>{_children}</ul>
    </React.Fragment>
  );
};

Nav.displayName = "Nav";

export default Nav;

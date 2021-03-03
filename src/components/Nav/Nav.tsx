import React, { useState } from "react";
import cn from "classnames";
import NavItem, { NavItemProps } from "./NavItem";
import El from "../El/El";
import NavBarHeading from "./NavBarHeading";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export type NavProps<
  As extends React.ElementType = "ul"
> = TablerComponentProps<
  As,
  {
    tabbed?: boolean;
    items?: React.ReactNode;
    itemsObjects?: Array<NavItemProps>;
    routerContextComponentType?: any;
    isMenu?: boolean;
    heading?: string;
  }
>;

const Nav = function ({
  as,
  className,
  children,
  tabbed = false,
  items,
  itemsObjects,
  routerContextComponentType,
  isMenu,
  heading,
  ...rest
}: NavProps) {
  const [, setPathName] = useState("");

  const routerCallback = (location: { pathname: string }): any => {
    setPathName(location.pathname);
  };

  const classes = cn(
    "nav",
    "navbar-nav",
    { "navbar-menu": isMenu, "nav-tabs": tabbed },
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
      itemsObjects.map(({ active, ...restItemProps }, i) => (
        <NavItem
          key={i}
          hasSubNav={
            (restItemProps.subItems || restItemProps.subItemsObjects) === true
          }
          {...restItemProps}
        />
      )));
  const _children = _items || children;

  const Component = as || El.Ul;

  return (
    <React.Fragment>
      {element}
      <Component className={classes} {...rest}>
        {heading && <NavBarHeading>{heading}</NavBarHeading>}
        {_children}
      </Component>
    </React.Fragment>
  );
};

export default Nav;

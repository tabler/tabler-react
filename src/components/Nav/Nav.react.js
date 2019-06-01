//@flow

import * as React from "react";
import cn from "classnames";
import NavItem from "./NavItem.react";
import NavLink from "./NavLink.react";
import NavSubItem from "./NavSubItem.react";
import NavSubmenu from "./NavSubmenu.react";
import NavSubmenuItem from "./NavSubmenuItem.react";

export type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

type Props = {|
  +children?: React.Node,
  +className?: string,
  +tabbed?: boolean,
  // eslint-disable-next-line no-use-before-define
  +items?: React.ChildrenArray<React.Element<typeof Nav.Item>>,
  +itemsObjects?: Array<navItem>,
  +routerContextComponentType?: React.ElementType,
|};

type State = {|
  pathName: ?string,
|};

class Nav extends React.Component<Props, State> {
  state = {
    pathName: null,
  };

  static Item = NavItem;
  static SubItem = NavSubItem;
  static Link = NavLink;
  static Submenu = NavSubmenu;
  static SubmenuItem = NavSubmenuItem;

  routerCallback = (location: { pathname: string }): void => {
    this.setState({ pathName: location.pathname });
  };

  computeActive(
    initialValue?: boolean,
    to?: string,
    subItems?: Array<subNavItem>
  ): boolean {
    const { pathName } = this.state;

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
  }

  render(): React.Node {
    const {
      className,
      children,
      tabbed = true,
      items,
      itemsObjects,
      routerContextComponentType,
    } = this.props;
    const classes = cn({ nav: true, "nav-tabs": tabbed }, className);

    let element: ?React.Element<*> = null;
    if (routerContextComponentType) {
      const routerContextComponentFactory = React.createFactory(
        routerContextComponentType
      );
      element = routerContextComponentFactory({
        callback: this.routerCallback,
      });
    }

    return (
      <React.Fragment>
        {element}
        <ul className={classes}>
          {items ||
            (itemsObjects &&
              itemsObjects.map((a, i) => (
                <Nav.Item
                  key={i}
                  icon={a.icon}
                  value={a.value}
                  to={a.to}
                  hasSubNav={!!a.subItems}
                  LinkComponent={a.LinkComponent}
                  subItemsObjects={a.subItems}
                  active={this.computeActive(a.active, a.to, a.subItems)}
                  useExact={a.useExact}
                />
              ))) ||
            children}
        </ul>
      </React.Fragment>
    );
  }
}

//Nav.Item = NavItem;

export default Nav;

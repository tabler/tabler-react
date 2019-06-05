import * as React from "react";
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

class Nav extends React.Component<Props, State> {
  state = {
    pathName: null,
  };

  routerCallback = (location: { pathname: string }): any => {
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

  render() {
    const {
      className,
      children,
      tabbed = true,
      items,
      itemsObjects,
      routerContextComponentType,
    } = this.props;
    const classes = cn({ nav: true, "nav-tabs": tabbed }, className);

    let element: null | React.ReactElement<any> = null;
    if (routerContextComponentType) {
      const routerContextComponentFactory = React.createFactory(
        routerContextComponentType
      );
      element = routerContextComponentFactory({
        callback: this.routerCallback,
      } as any);
    }

    const _items =
      items ||
      (itemsObjects &&
        itemsObjects.map((a, i) => (
          <NavItem
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
        )));
    const _children = _items || children;

    return (
      <React.Fragment>
        {element}
        <ul className={classes}>{_children}</ul>
      </React.Fragment>
    );
  }
}

// Nav.Item = NavItem;

export default Nav;

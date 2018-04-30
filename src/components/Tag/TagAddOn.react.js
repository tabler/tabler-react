// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";

type PropsForAll = {|
  +children?: React.Node,
  +className?: string,
  +icon?: string,
  +color?: string,
|};

type DefaultProps = {| ...PropsForAll |};

type PropsForLink = {|
  ...PropsForAll,
  link: true,
  +href?: string,
  +onClick?: (event: SyntheticMouseEvent<HTMLLinkElement>) => mixed,
|};

type PropsForReactRouter = {|
  ...PropsForAll,
  +RootComponent: React.ElementType,
  +to: string,
|};

type Props = DefaultProps | PropsForLink | PropsForReactRouter;

function TagAddOn(props: Props): React.Node {
  const { children, className, icon, color = "" } = props;
  const classes = cn("tag-addon", { [`tag-${color}`]: color }, className);

  const childrenForAll = (
    <React.Fragment>
      {icon && <Icon name={icon} />}
      {children}
    </React.Fragment>
  );

  if (props.link) {
    const { href, onClick } = props;
    return (
      <a className={classes} href={href} onClick={onClick}>
        {childrenForAll}
      </a>
    );
  }

  if (props.RootComponent) {
    const { RootComponent: Component, to } = props;
    return <Component to={to}>{childrenForAll}</Component>;
  }

  return <span className={classes}>{childrenForAll}</span>;
}

TagAddOn.displayName = "Tag.AddOn";

export default TagAddOn;

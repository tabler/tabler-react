// @flow

import * as React from "react";
import cn from "classnames";
import TagList from "./TagList.react";
import TagAddOn from "./TagAddOn.react";

type PropsForAll = {|
  +children?: React.Node,
  +className?: string,
  +rounded?: boolean,
  +color?: string,
  +avatar?: string,
  +remove?: boolean,
  +addOn?: React.Node,
  +addOnIcon?: string,
  +addOnColor?: string,
|};

type DefaultProps = {|
  ...PropsForAll,
|};

type LinkComponentProps = {|
  ...PropsForAll,
  +link: true,
  +href: string,
|};

type ReactRouterProps = {|
  ...PropsForAll,
  +RootComponent: React.ElementType,
  +to: string,
|};

type Props = DefaultProps | LinkComponentProps | ReactRouterProps;

function Tag(props: Props): React.Node {
  const {
    children,
    className,
    rounded,
    color = "",
    avatar,
    remove,
    addOn,
    addOnIcon,
    addOnColor,
  } = props;
  const classes = cn(
    {
      tag: true,
      expanded: true,
      "tag-rounded": rounded,
      [`tag-${color}`]: color,
    },
    className
  );
  const childrenForAll = (
    <React.Fragment>
      {avatar && (
        <span
          class="tag-avatar avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      )}
      {children}
      {(addOn || addOnIcon) && (
        <TagAddOn icon={addOnIcon} color={addOnColor}>
          {addOn}
        </TagAddOn>
      )}
      {remove && <TagAddOn link icon="x" />}
    </React.Fragment>
  );

  if (props.RootComponent) {
    const { RootComponent: Component, to } = props;
    return (
      <Component className={classes} to={to}>
        {childrenForAll}
      </Component>
    );
  }

  if (props.link) {
    const { href } = props;
    return (
      <a className={classes} href={href}>
        {childrenForAll}
      </a>
    );
  }

  return <span className={classes}>{childrenForAll}</span>;
}

Tag.displayName = "Tag";

Tag.List = TagList;
Tag.AddOn = TagAddOn;

export default Tag;

// @flow

import * as React from "react";
import cn from "classnames";
import TagList from "./TagList.react";
import TagAddOn from "./TagAddOn.react";

import type { MouseEvents, PointerEvents, FocusEvents } from "../../";

type PropsForAll = {|
  ...MouseEvents,
  ...PointerEvents,
  ...FocusEvents,
  +children?: React.Node,
  +className?: string,
  +rounded?: boolean,
  +color?: string,
  +avatar?: string,
  +remove?: boolean,
  +onRemoveClick?: Function,
  +addOn?: React.Node,
  +addOnIcon?: string,
  +addOnColor?: string,
  +onAddOnClick?: Function,
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
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
    onRemoveClick,
    onAddOnClick,
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

  const eventProps = {
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
  };

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
        <TagAddOn icon={addOnIcon} color={addOnColor} onClick={onAddOnClick}>
          {addOn}
        </TagAddOn>
      )}
      {remove && <TagAddOn onClick={onRemoveClick} link icon="x" />}
    </React.Fragment>
  );

  if (props.RootComponent) {
    const { RootComponent: Component, to } = props;
    return (
      <Component className={classes} to={to} {...eventProps}>
        {childrenForAll}
      </Component>
    );
  }

  if (props.link) {
    const { href } = props;
    return (
      <a className={classes} href={href} {...eventProps}>
        {childrenForAll}
      </a>
    );
  }

  return (
    <span className={classes} {...eventProps}>
      {childrenForAll}
    </span>
  );
}

Tag.displayName = "Tag";

Tag.List = TagList;
Tag.AddOn = TagAddOn;

export default Tag;

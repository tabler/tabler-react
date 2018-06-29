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

type State = {|
  isDeleted: boolean,
|};

class Tag extends React.Component<Props, State> {
  state = {
    isDeleted: false,
  };

  static List = TagList;
  static AddOn = TagAddOn;

  handleOnRemoveClick = (): void => {
    this.setState(s => ({
      isDeleted: true,
    }));
  };

  render(): React.Node {
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
    } = this.props;

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

    if (this.state.isDeleted) {
      return null;
    }

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
        {remove && onRemoveClick ? (
          <TagAddOn onClick={onRemoveClick} link icon="x" />
        ) : (
          remove && (
            <TagAddOn onClick={this.handleOnRemoveClick} link icon="x" />
          )
        )}
      </React.Fragment>
    );

    if (this.props.RootComponent) {
      const { to } = this.props;
      return (
        <React.Component className={classes} to={to} {...eventProps}>
          {childrenForAll}
        </React.Component>
      );
    }

    if (this.props.link) {
      const { href } = this.props;
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
}

export default Tag;

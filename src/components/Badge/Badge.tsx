import React, { useState } from "react";
import cn from "classnames";
import BadgeAddOn from "./BadgeAddOn";

import {
  MouseEvents,
  PointerEvents,
  FocusEvents,
  TablerComponent,
} from "../../types";
import { colors, softColors } from "../../colors";

interface PropsForAll
  extends TablerComponent,
    MouseEvents,
    PointerEvents,
    FocusEvents {
  rounded?: boolean;
  color?: colors;
  avatar?: string;
  remove?: boolean;
  onRemoveClick?: React.MouseEventHandler;
  addOn?: React.ReactNode;
  addOnIcon?: string;
  addOnColor?: string;
  onAddOnClick?: React.MouseEventHandler;
  link?: true;
  href?: string;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  to?: string;
  textColor?: colors;
  pill?: boolean;
  as?: React.ElementType;
}

interface DefaultProps extends PropsForAll {}

interface LinkComponentProps extends PropsForAll {
  link: true;
  href: string;
}

interface ReactRouterProps extends PropsForAll {
  RootComponent: React.ElementType;
  to: string;
}

export type Props = DefaultProps | LinkComponentProps | ReactRouterProps;

const Badge = function({
  children,
  className,
  rounded,
  color = "primary",
  avatar,
  remove,
  addOn,
  addOnIcon,
  addOnColor,
  onRemoveClick,
  onAddOnClick,
  RootComponent,
  link,
  href,
  as,
  textColor = "white",
  pill,
  to,
  ...rest
}: Props) {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleOnRemoveClick = (): void => {
    setIsDeleted(true);
  };

  const classes = cn(
    {
      badge: true,
      expanded: true,
      "badge-pill": rounded || pill,
      [`bg-${color}`]: color,
      [`text-${textColor}`]: softColors.includes(color) ? false : textColor,
    },
    className
  );

  if (isDeleted) {
    return null;
  }

  const childrenForAll = (
    <React.Fragment>
      {avatar && (
        <span
          className="Badge-avatar avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      )}
      {children}
      {(addOn || addOnIcon) && (
        <BadgeAddOn icon={addOnIcon} color={addOnColor} onClick={onAddOnClick}>
          {addOn}
        </BadgeAddOn>
      )}
      {remove && onRemoveClick ? (
        <BadgeAddOn onClick={onRemoveClick} link icon="x" />
      ) : (
        remove && <BadgeAddOn onClick={handleOnRemoveClick} link icon="x" />
      )}
    </React.Fragment>
  );

  const Component = as || RootComponent;
  if (Component) {
    return (
      <Component className={classes} to={to} {...rest}>
        {childrenForAll}
      </Component>
    );
  }

  if (link) {
    return (
      <a className={classes} href={href} {...rest}>
        {childrenForAll}
      </a>
    );
  }

  return (
    <span className={classes} {...rest}>
      {childrenForAll}
    </span>
  );
};

export default Badge;

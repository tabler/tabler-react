import React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { IconProps } from "../Icon/Icon";
import { colors } from "../../colors";

export interface TimelineItemIconProps extends IconProps {
  children?: React.ReactNode;
  active?: boolean;
  bg?: colors;
}

function TimelineItemIcon({
  children,
  className,
  active,
  bg,
  ...rest
}: TimelineItemIconProps) {
  const _className = cn("list-timeline-icon", { [`bg-${bg}`]: bg }, className);
  return (
    <Icon className={_className} {...rest}>
      {active ? <strong>{children}</strong> : children}
    </Icon>
  );
}

export default TimelineItemIcon;

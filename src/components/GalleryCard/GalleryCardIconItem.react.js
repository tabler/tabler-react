// @flow
import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";

type Props = {
  +className?: string,
  +label?: string,
  +name: string,
  +href?: string,
  +right?: boolean,
};

function GalleryCardIconItem({ className, label, name, href, right }: Props) {
  const iconRightClass = "d-none d-md-inline-block ml-3";
  const aClasses = !right
    ? cn("icon", className)
    : cn("icon", iconRightClass, className);

  const iconClasses = cn("mr-1");
  const extraProps = {};

  if (href) {
    extraProps.href = href;
  }

  return (
    <a className={aClasses} {...extraProps}>
      <Icon name={name} className={iconClasses} />
      {label}
    </a>
  );
}

export default GalleryCardIconItem;

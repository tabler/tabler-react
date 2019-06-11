import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";

interface Props {
  className?: string;
  label?: string;
  name: string;
  href?: string;
  right?: boolean;
  to?: string;
  RootComponent?: React.ElementType;
}

function GalleryCardIconItem({
  className,
  label,
  name,
  href,
  right,
  to,
  RootComponent,
}: Props) {
  const positionRightClasses = "d-none d-md-inline-block ml-3";
  const componentClasses = !right
    ? cn("icon", className)
    : cn("icon", positionRightClasses, className);

  const iconClasses = cn("mr-1");

  const childrenForAll = (
    <React.Fragment>
      <Icon name={name} className={iconClasses} />
      {label}
    </React.Fragment>
  );

  const extraProps: Pick<Props, "href"> = { href: undefined };

  if (href) {
    extraProps.href = href;
  }

  return RootComponent ? (
    <RootComponent className={componentClasses} to={to}>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={componentClasses} {...extraProps}>
      {childrenForAll}
    </a>
  );
}



/** @component */
export default GalleryCardIconItem;

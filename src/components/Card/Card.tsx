import React, { useState, HTMLProps } from "react";

import cn from "classnames";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardOptions from "./CardOptions";
import CardOptionsItem from "./CardOptionsItem";
import CardStatus from "./CardStatus";
import CardAlert from "./CardAlert";
import CardFooter from "./CardFooter";
import CardMap from "./CardMap";
import { colors } from "../../colors";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface CardProps
  extends ELProps,
    Omit<HTMLProps<HTMLDivElement>, "as"> {
  title?: string;
  body?: React.ReactNode;
  as?: React.ElementType;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  options?: React.ReactNode;
  isCollapsible?: boolean;
  isCollapsed?: boolean;
  isClosable?: boolean;
  isClosed?: boolean;
  isFullscreenable?: boolean;
  statusColor?: colors;
  statusSide?: boolean;
  alert?: React.ReactNode;
  alertColor?: colors;
  footer?: string;
  aside?: boolean;
}

const Card = function({
  className,
  children,
  as = El.Div,
  RootComponent,
  title,
  body,
  options,
  isCollapsible,
  isClosable,
  isFullscreenable,
  aside,
  statusColor,
  statusSide,
  alert,
  alertColor,
  footer,
  isClosed,
  isCollapsed,
  ...rest
}: CardProps) {
  const [_isClosed, setIsClosed] = useState(isClosed || false);
  const [_isCollapsed, setIsCollapsed] = useState(isCollapsed || false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCloseOnClick = (): void => {
    setIsClosed(s => !s);
  };

  const handleCollapseOnClick = (): void => {
    setIsCollapsed(s => !s);
  };

  const handleFullscreenOnClick = (): void => {
    setIsFullscreen(s => !s);
  };

  if (_isClosed) {
    return null;
  }
  const classes = cn(
    {
      card: true,
      aside: aside,
      "card-collapsed": _isCollapsed,
      "card-fullscreen": isFullscreen,
    },
    className
  );
  const Component = RootComponent || as;

  const card_options = (options || isCollapsible || isClosable) && (
    <CardOptions>
      {options}
      {isCollapsible && (
        <CardOptionsItem onClick={handleCollapseOnClick} type="collapse" />
      )}
      {isFullscreenable && (
        <CardOptionsItem type="fullscreen" onClick={handleFullscreenOnClick} />
      )}
      {isClosable && (
        <CardOptionsItem type="close" onClick={handleCloseOnClick} />
      )}
    </CardOptions>
  );

  const card_status = statusColor && (
    <CardStatus color={statusColor} side={statusSide} />
  );

  const card_alert = alert && alertColor && (
    <CardAlert color={alertColor}>{alert}</CardAlert>
  );

  const card_header = title && (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {card_options}
    </CardHeader>
  );

  const card_body = body && <CardBody>{body}</CardBody>;

  const card_footer = footer && <CardFooter>{footer}</CardFooter>;

  if (card_header !== null || card_body !== null) {
    return (
      <Component className={classes} {...rest}>
        {card_status}
        {card_header}
        {card_alert}
        {card_body || children}
        {card_footer}
      </Component>
    );
  }

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

// static Header = CardHeader;
//   static Body = CardBody;
//   static Title = CardTitle;
//   static Options = CardOptions;
//   static OptionsItem = CardOptionsItem;
//   static Status = CardStatus;
//   static Alert = CardAlert;
//   static Footer = CardFooter;
//   static Map = CardMap;

/** @component */
export default Card;

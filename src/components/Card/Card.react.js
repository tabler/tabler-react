// @flow
import * as React from "react";

import cn from "classnames";
import CardHeader from "./CardHeader.react";
import CardTitle from "./CardTitle.react";
import CardBody from "./CardBody.react";
import CardOptions from "./CardOptions.react";
import CardOptionsItem from "./CardOptionsItem.react";
import CardStatus from "./CardStatus.react";
import CardAlert from "./CardAlert.react";
import CardFooter from "./CardFooter.react";
import CardMap from "./CardMap.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +body?: React.Node,
  +RootComponent?: React.ElementType,
  +options?: React.Node,
  +isCollapsible?: boolean,
  +isCollapsed?: boolean,
  +isClosable?: boolean,
  +isClosed?: boolean,
  +isFullscreenable?: boolean,
  +statusColor?: string,
  +statusSide?: boolean,
  +alert?: React.Node,
  +alertColor?: string,
  +footer?: string,
  +aside?: boolean,
|};

type State = {|
  isClosed: boolean,
  isCollapsed: boolean,
  isFullscreen: boolean,
|};

class Card extends React.PureComponent<Props, State> {
  state = {
    isClosed: this.props.isClosed || false,
    isCollapsed: this.props.isCollapsed || false,
    isFullscreen: false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Title = CardTitle;
  static Options = CardOptions;
  static OptionsItem = CardOptionsItem;
  static Status = CardStatus;
  static Alert = CardAlert;
  static Footer = CardFooter;
  static Map = CardMap;

  handleCloseOnClick = (): void => {
    this.setState(s => ({
      isClosed: !s.isClosed,
    }));
  };

  handleCollapseOnClick = (): void => {
    this.setState(s => ({
      isCollapsed: !s.isCollapsed,
    }));
  };

  handleFullscreenOnClick = (): void => {
    this.setState(s => ({
      isFullscreen: !s.isFullscreen,
    }));
  };

  render(): React.Node {
    const {
      className,
      children,
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
    } = this.props;
    const { isClosed, isCollapsed, isFullscreen } = this.state;
    if (isClosed) {
      return null;
    }
    const classes = cn(
      {
        card: true,
        aside: aside,
        "card-collapsed": isCollapsed,
        "card-fullscreen": isFullscreen,
      },
      className
    );
    const Component = RootComponent || "div";

    const card_options = (options || isCollapsible || isClosable) && (
      <Card.Options>
        {options}
        {isCollapsible && (
          <Card.OptionsItem
            onClick={this.handleCollapseOnClick}
            type="collapse"
          />
        )}
        {isFullscreenable && (
          <Card.OptionsItem
            type="fullscreen"
            onClick={this.handleFullscreenOnClick}
          />
        )}
        {isClosable && (
          <Card.OptionsItem type="close" onClick={this.handleCloseOnClick} />
        )}
      </Card.Options>
    );

    const card_status = statusColor && (
      <Card.Status color={statusColor} side={statusSide} />
    );

    const card_alert = alert &&
      alertColor && <Card.Alert color={alertColor}>{alert}</Card.Alert>;

    const card_header = title && (
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        {card_options}
      </Card.Header>
    );

    const card_body = body && <Card.Body>{body}</Card.Body>;

    const card_footer = footer && <Card.Footer>{footer}</Card.Footer>;

    if (card_header !== null || card_body !== null) {
      return (
        <Component className={classes}>
          {card_status}
          {card_header}
          {card_alert}
          {card_body || children}
          {card_footer}
        </Component>
      );
    } else {
      return <Component className={classes}>{children}</Component>;
    }
  }
}

/** @component */
export default Card;

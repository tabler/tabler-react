// @flow
import * as React from "react";

import cn from "classnames";
import CardHeader from "./CardHeader.react";
import CardTitle from "./CardTitle.react";
import CardBody from "./CardBody.react";
import CardOptions from "./CardOptions.react";
import CardOptionsItem from "./CardOptionsItem.react";
import CardStatus from "./CardStatus.react";

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
  +statusColor?: string,
  +statusSide?: boolean,
|};

type State = {| isCollapsed: boolean |};

class Card extends React.PureComponent<Props, State> {
  state = {
    isCollapsed: this.props.isCollapsed || false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Title = CardTitle;
  static Options = CardOptions;
  static OptionsItem = CardOptionsItem;
  static Status = CardStatus;

  handleCollapseOnClick = () => {
    this.setState(s => ({
      isCollapsed: !s.isCollapsed,
    }));
  };

  render() {
    const {
      className,
      children,
      RootComponent,
      title,
      body,
      options,
      isCollapsible,
      isClosable,
      statusColor,
      statusSide,
    } = this.props;
    const { isCollapsed } = this.state;

    const classes = cn(
      { card: true, "card-collapsed": isCollapsed },
      className
    );
    const Component = RootComponent || "div";

    const card_options = (options || isCollapsible || isClosable) && (
      <Card.Options>
        {isCollapsible && (
          <Card.OptionsItem
            onClick={this.handleCollapseOnClick}
            type="collapse"
          />
        )}
        {isClosable && <Card.OptionsItem type="close" />}
        {options}
      </Card.Options>
    );

    const card_status = statusColor && (
      <Card.Status color={statusColor} side={statusSide} />
    );

    const card_header = title && (
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        {card_options}
      </Card.Header>
    );

    const card_body = body && <Card.Body>{body}</Card.Body>;

    if (card_header !== null || card_body !== null) {
      return (
        <Component className={classes}>
          {card_status}
          {card_header}
          {card_body || children}
        </Component>
      );
    } else {
      return <Component className={classes}>{children}</Component>;
    }
  }
}

export default Card;

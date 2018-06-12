// @flow

import * as React from "react";
import cn from "classnames";
import { List, Icon, Button, Tooltip } from "../";
import { Placement } from "react-popper";

export type itemObject = {|
  name: string,
  label?: string,
  to?: string,
  tooltip?: string,
  /**
   * Tooltip placement
   */
  placement?: Placement,
  color?: string,
|};

type Props = {|
  +children?: React.Node,
  +className?: string,
  +asButtons?: boolean,
  +prefix?: string,
  +itemsObjects?: Array<itemObject>,
  +items?: Array<React.Node>,
|};

function listItemFromObjectFactory(
  asButtons: boolean = false,
  iconPrefix: string
) {
  return ({
    tooltip,
    placement = "top",
    to,
    name,
    label,
    ...item
  }: itemObject) => {
    const itemContent = asButtons ? (
      <Button to={to} social={name} color={item.color} size="sm">
        label}
      </Button>
    ) : (
      <a href={to} data-original-title={tooltip}>
        <Icon prefix={iconPrefix} name={name} />
      </a>
    );
    const itemComponent = <List.Item inline>{itemContent}</List.Item>;
    return tooltip ? (
      <Tooltip content={tooltip} placement={placement}>
        {itemComponent}
      </Tooltip>
    ) : (
      itemComponent
    );
  };
}

function SocialNetworksList(props: Props): React.Node {
  const {
    children,
    className,
    asButtons,
    prefix = "fe",
    items,
    itemsObjects,
  } = props;
  const classes = cn("social-links", className);

  const getObjectListItem = listItemFromObjectFactory(asButtons, prefix);

  const contents =
    (itemsObjects && itemsObjects.map(getObjectListItem)) ||
    (items && items.map(item => <List.Item inline>{item}</List.Item>)) ||
    children;

  return (
    <List inline className={classes}>
      {contents}
    </List>
  );
}

SocialNetworksList.displayName = "SocialNetworksList";

export default SocialNetworksList;

// @flow

import * as React from "react";
import cn from "classnames";
import { List, Icon, Button } from "../";

type itemObject = {|
  name: string,
  label?: string,
  to?: string,
  tooltip?: string,
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
  return (item: itemObject) => {
    const itemContent = asButtons ? (
      <Button to={item.to} social={item.name} color={item.color} size="sm">
        {item.label}
      </Button>
    ) : (
      <a href={item.to} data-original-title={item.tooltip}>
        <Icon prefix={iconPrefix} name={item.name} />
      </a>
    );
    return <List.Item inline>{itemContent}</List.Item>;
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

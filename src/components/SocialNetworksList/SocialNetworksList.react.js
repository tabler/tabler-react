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

function listItemFromObjectFactory(asButtons, iconPrefix) {
  return item => {
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
  const { children, className, asButtons, prefix = "fe" } = props;
  const classes = cn("social-links", className);

  const getObjectListItem = listItemFromObjectFactory(asButtons, prefix);

  const items =
    (props.itemsObjects && props.itemsObjects.map(getObjectListItem)) ||
    (props.items &&
      props.items.map(item => <List.Item inline>{item}</List.Item>)) ||
    children;

  return (
    <List inline className={classes}>
      {items}
    </List>
  );
}

SocialNetworksList.displayName = "SocialNetworksList";

export default SocialNetworksList;

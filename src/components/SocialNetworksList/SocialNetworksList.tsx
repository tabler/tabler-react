import * as React from "react";
import cn from "classnames";

import List from "../List";
import Button from "../Button";
import Icon from "../Icon";
import { colors } from "../../colors";

type itemObject = {
  name: string;
  label?: string;
  to?: string;
  tooltip?: string;
  color?: colors;
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  asButtons?: boolean;
  prefix?: string;
  itemsObjects?: Array<itemObject>;
  items?: Array<React.ReactNode>;
};

function listItemFromObjectFactory(
  asButtons: boolean = false,
  iconPrefix: string
) {
  return (item: itemObject, index: number) => {
    const itemContent = asButtons ? (
      <Button to={item.to} social={item.name} color={item.color} size="sm">
        {item.label}
      </Button>
    ) : (
      <a href={item.to} data-original-title={item.tooltip}>
        <Icon prefix={iconPrefix} name={item.name} />
      </a>
    );
    return (
      <List.Item key={index} inline>
        {itemContent}
      </List.Item>
    );
  };
}

function SocialNetworksList(props: Props) {
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
    (items &&
      items.map((item, index) => (
        <List.Item key={index} inline>
          {item}
        </List.Item>
      ))) ||
    children;

  return (
    <List inline className={classes}>
      {contents}
    </List>
  );
}

export default SocialNetworksList;

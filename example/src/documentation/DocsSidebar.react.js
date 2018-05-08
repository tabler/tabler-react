// @flow

import * as React from "react";
import { Button, List } from "tabler-react";
import { NavLink } from "react-router-dom";

function Sidebar(): React.Node {
  return (
    <React.Fragment>
      <Button
        href="https://github.com/jonthomp/react-tabler-components"
        className="mb-6"
        block
        RootComponent="a"
        color="primary"
      >
        <i className="fe fe-github mr-2" /> Browse source code
      </Button>

      <List.Group transparent>
        <List.GroupItem RootComponent={NavLink} to={"/docs"} icon="flag">
          Introduction
        </List.GroupItem>
      </List.Group>

      <List.Group transparent>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/alerts"}
          icon="alert-triangle"
        >
          Alerts
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/avatars"}
          icon="user"
        >
          Avatars
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/badges"}
          icon="plus-square"
        >
          Badges
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/buttons"}
          icon="plus-square"
        >
          Buttons
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/colors"}
          icon="feather"
        >
          Colors
        </List.GroupItem>
        <List.GroupItem RootComponent={NavLink} to={"/docs/cards"} icon="image">
          Cards
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/charts"}
          icon="pie-chart"
        >
          Charts
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/dropdowns"}
          icon="pie-chart"
        >
          Dropdowns
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/form-components"}
          icon="check-square"
        >
          Form components
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/grids"}
          icon="pie-chart"
        >
          Grids
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/lists"}
          icon="pie-chart"
        >
          Lists
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/navs"}
          icon="pie-chart"
        >
          Navs
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/stamps"}
          icon="pie-chart"
        >
          Stamps
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/tables"}
          icon="table"
        >
          Tables
        </List.GroupItem>
        <List.GroupItem RootComponent={NavLink} to={"/docs/tags"} icon="tag">
          Tags
        </List.GroupItem>
        <List.GroupItem
          RootComponent={NavLink}
          to={"/docs/typography"}
          icon="type"
        >
          Typography
        </List.GroupItem>
      </List.Group>
    </React.Fragment>
  );
}

export default Sidebar;

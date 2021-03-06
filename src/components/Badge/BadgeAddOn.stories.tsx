import * as React from "react";

import { storiesOf } from "@storybook/react";

import Badge from ".";
import examples from "./BadgeAddOn.examples.md";
import Icon from "../Icon";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Badge/BadgeAddOn", module);

stories.add(
  "Example",
  () => {
    return (
      <Badge.List>
        <Badge addOn={<Icon name="user" />}>A User</Badge>
        <Badge color="danger" addOnIcon="activity">
          NPM
        </Badge>
        <Badge addOn="passing" addOnColor="success">
          tests
        </Badge>
        <Badge color="blue" addOn="1kb" addOnColor="warning">
          CSS gzip size
        </Badge>
      </Badge.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

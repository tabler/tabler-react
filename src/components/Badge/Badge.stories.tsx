import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Badge from ".";
import examples from "./Badge.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Badge/Badge", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <React.Fragment>
        <Badge color="primary" className="mr-1">
          primary
        </Badge>
        <Badge color="secondary" className="mr-1">
          secondary
        </Badge>
        <Badge color="info" className="mr-1">
          info
        </Badge>
        <Badge color="warning" className="mr-1">
          warning
        </Badge>
        <Badge color="success" className="mr-1">
          success
        </Badge>
        <Badge color="danger" className="mr-1">
          danger
        </Badge>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: examples },
  }
);

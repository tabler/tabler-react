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

stories.add("Pills", () => {
  return (
    <React.Fragment>
      <Badge color="primary" className="m-1" pill>
        primary
      </Badge>
      <Badge color="secondary" className="m-1" pill>
        secondary
      </Badge>
      <Badge color="info" className="m-1" pill>
        info
      </Badge>
      <Badge color="warning" className="m-1" pill>
        warning
      </Badge>
      <Badge color="success" className="m-1" pill>
        success
      </Badge>
      <Badge color="danger" className="m-1" pill>
        danger
      </Badge>
    </React.Fragment>
  );
});

stories.add("Soft", () => {
  return (
    <React.Fragment>
      <Badge color="blue-lt" className="m-1">
        blue-lt
      </Badge>
      <Badge color="azure-lt" className="m-1">
        azure-lt
      </Badge>
      <Badge color="indigo-lt" className="m-1">
        indigo-lt
      </Badge>
      <Badge color="purple-lt" className="m-1">
        purple-lt
      </Badge>
      <Badge color="pink-lt" className="m-1">
        pink-lt
      </Badge>
      <Badge color="red-lt" className="m-1">
        red-lt
      </Badge>
      <Badge color="orange-lt" className="m-1">
        orange-lt
      </Badge>
      <Badge color="yellow-lt" className="m-1">
        yellow-lt
      </Badge>
      <Badge color="lime-lt" className="m-1">
        lime-lt
      </Badge>
      <Badge color="green-lt" className="m-1">
        green-lt
      </Badge>
      <Badge color="teal-lt" className="m-1">
        teal-lt
      </Badge>
      <Badge color="cyan-lt" className="m-1">
        cyan-lt
      </Badge>
      <Badge color="gray-lt" className="m-1">
        gray-lt
      </Badge>
      <Badge color="dark-lt" className="m-1">
        dark-lt
      </Badge>
    </React.Fragment>
  );
});

stories.add("Empty Badges", () => {
  return (
    <React.Fragment>
      <Badge color="blue" className="m-1" />
      <Badge color="azure" className="m-1" />
      <Badge color="indigo" className="m-1" />
      <Badge color="purple" className="m-1" />
      <Badge color="pink" className="m-1" />
      <Badge color="red" className="m-1" />
      <Badge color="orange" className="m-1" />
      <Badge color="yellow" className="m-1" />
      <Badge color="lime" className="m-1" />
      <Badge color="green" className="m-1" />
      <Badge color="teal" className="m-1" />
      <Badge color="cyan" className="m-1" />
      <Badge color="gray" className="m-1" />
    </React.Fragment>
  );
});

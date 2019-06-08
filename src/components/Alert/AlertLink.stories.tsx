import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Alert from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Alert/AlertLink", module);

stories.addDecorator(withKnobs);

stories.add("Basic", () => {
  return <Alert.Link>An Alert.Link</Alert.Link>;
});

stories.add("Example", () => {
  return (
    <Alert type="success" hasExtraSpace>
      <a>A normal link</a> <Alert.Link>An Alert.Link</Alert.Link>
    </Alert>
  );
});

import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormDatePicker", module);

stories.addDecorator(withKnobs);

stories.add("Example", () => {
  return <Form.DatePicker />;
});

import * as React from "react";

import { storiesOf } from "@storybook/react";

import Form from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormDatePicker", module);

stories.add("Example", () => {
  return <Form.DatePicker />;
});

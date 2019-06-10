import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormColorCheck.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormColorCheck", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Form.Group label="Color input">
        <Form.ColorCheck>
          <Form.ColorCheckItem color="azure" />
          <Form.ColorCheckItem color="indigo" />
          <Form.ColorCheckItem color="purple" />
          <Form.ColorCheckItem color="pink" />
          <Form.ColorCheckItem color="red" />
          <Form.ColorCheckItem color="orange" />
          <Form.ColorCheckItem color="yellow" />
          <Form.ColorCheckItem color="lime" />
          <Form.ColorCheckItem color="green" />
          <Form.ColorCheckItem color="teal" />
        </Form.ColorCheck>
      </Form.Group>
    );
  },
  {
    notes: { markdown: examples },
  }
);

import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormInput.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormInput", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    return <Form.Input name="username" placeholder="Username" />;
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Labelled", () => {
  return (
    <React.Fragment>
      <Form.Input label="username" placeholder="Username" />
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Input placeholder="Username" />
      </Form.Group>
    </React.Fragment>
  );
});

stories.add("Prepend Icon", () => {
  return (
    <Form.Group label="Input Icon">
      <Form.Input icon="user" placeholder="Username" />
    </Form.Group>
  );
});

stories.add("Append Icon", () => {
  return (
    <Form.Group label="Input Icon">
      <Form.Input icon="search" placeholder="Search for..." position="append" />
    </Form.Group>
  );
});

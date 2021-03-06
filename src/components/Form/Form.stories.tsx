import * as React from "react";

import { storiesOf } from "@storybook/react";

import Form from ".";
import examples from "./Form.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/Form", module);

stories.add(
  "Example",
  () => {
    return (
      <Form>
        <Form.Input
          name="username"
          label="Username"
          placeholder="Enter Username"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
  {
    notes: { markdown: examples },
  }
);

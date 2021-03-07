import * as React from "react";

import { storiesOf } from "@storybook/react";

import Form from ".";
import examples from "./FormInputGroup.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormInputGroup", module);

stories.add(
  "Example",
  () => {
    return (
      <Form.InputGroup
        append={
          <Button as="a" color="primary" href="http://www.google.com">
            Go!
          </Button>
        }
      >
        <Form.Input placeholder="Search for..." />
      </Form.InputGroup>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Input from props", () => {
  return (
    <Form.InputGroup
      inputProps={{ placeholder: "Search for..." }}
      append={
        <Button as="a" color="primary" href="http://www.google.com">
          Go!
        </Button>
      }
    />
  );
});

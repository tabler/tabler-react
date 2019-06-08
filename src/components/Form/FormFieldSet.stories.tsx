import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormFieldSet.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormFieldSet", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Form.FieldSet>
        <Form.Group label="Full name" isRequired>
          <Form.Input name="example-text-input" />
        </Form.Group>
        <Form.Group label="Company" isRequired>
          <Form.Input name="example-text-input" />
        </Form.Group>
        <Form.Group label="Email" isRequired>
          <Form.Input name="example-text-input" />
        </Form.Group>
        <Form.Group label="Phone number" className="mb-0">
          <Form.Input name="example-text-input" />
        </Form.Group>
      </Form.FieldSet>
    );
  },
  {
    notes: { markdown: examples },
  }
);

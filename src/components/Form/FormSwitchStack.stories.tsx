import * as React from "react";

import { storiesOf } from "@storybook/react";

import Form from ".";
import examples from "./FormSwitchStack.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormSwitchStack", module);

stories.add(
  "Example",
  () => {
    return (
      <Form.Group label="Toggle switches">
        <Form.SwitchStack>
          <Form.Switch
            type="radio"
            name="toggle"
            value="option1"
            label="Option 1"
          />
          <Form.Switch
            type="radio"
            name="toggle"
            value="option2"
            label="Option 2"
          />
          <Form.Switch
            type="radio"
            name="toggle"
            value="option3"
            label="Option 3"
          />
        </Form.SwitchStack>
      </Form.Group>
    );
  },
  {
    notes: { markdown: examples },
  }
);

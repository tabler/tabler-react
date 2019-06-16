import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormInputGroupAppend.examples.md";
import Button from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormInputGroupAppend", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Form.InputGroup>
        <Form.Input placeholder="Search for..." />
        <Form.InputGroupAppend>
          <Button
            RootComponent="a"
            color="primary"
            href="http://www.google.com"
          >
            Go!
          </Button>
        </Form.InputGroupAppend>
      </Form.InputGroup>
    );
  },
  {
    notes: { markdown: examples },
  }
);

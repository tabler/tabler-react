import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormInputGroupPrepend.examples.md";
import Button from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormInputGroupPrepend", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Form.InputGroupPrepend>
        <Form.Input placeholder="Search for..." />
        <Form.InputGroupPrepend>
          <Button
            RootComponent="a"
            color="primary"
            href="http://www.google.com"
          >
            Go!
          </Button>
        </Form.InputGroupPrepend>
      </Form.InputGroupPrepend>
    );
  },
  {
    notes: { markdown: examples },
  }
);

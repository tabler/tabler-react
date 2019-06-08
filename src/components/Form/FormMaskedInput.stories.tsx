import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Form from ".";
import examples from "./FormMaskedInput.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Form/FormMaskedInput", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Form.Group label="Date">
        <Form.MaskedInput
          placeholder="00/00/0000"
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        />
      </Form.Group>
    );
  },
  {
    notes: { markdown: examples },
  }
);

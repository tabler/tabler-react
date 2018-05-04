// @flow
import * as React from "react";

import { Header, Form } from "tabler-react";

import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsFormComponentsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Form Components</Header.H2>

      <Header.H3>Color input</Header.H3>
      <ComponentDemo>
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
      </ComponentDemo>

      <Header.H3>Image input</Header.H3>
      <ComponentDemo>
        <Form.Group label="Image input">
          <Form.ImageCheck>
            <Form.ImageCheckItem
              imageURL="/demo/photos/nathan-anderson-316188-500.jpg"
              value="1"
              col={{ sm: 2 }}
            />
            <Form.ImageCheckItem
              imageURL="/demo/photos/nathan-dumlao-287713-500.jpg"
              value="2"
              col={{ sm: 2 }}
            />
            <Form.ImageCheckItem
              imageURL="/demo/photos/nicolas-picard-208276-500.jpg"
              value="3"
              col={{ sm: 2 }}
            />
            <Form.ImageCheckItem
              imageURL="/demo/photos/oskar-vertetics-53043-500.jpg"
              value="4"
              col={{ sm: 2 }}
            />
            <Form.ImageCheckItem
              imageURL="/demo/photos/priscilla-du-preez-181896-500.jpg"
              value="5"
              col={{ sm: 2 }}
            />
            <Form.ImageCheckItem
              imageURL="/demo/photos/ricardo-gomez-angel-262359-500.jpg"
              value="6"
              col={{ sm: 2 }}
            />
          </Form.ImageCheck>
        </Form.Group>
      </ComponentDemo>

      <Header.H3>Icon input</Header.H3>
      <ComponentDemo>
        <Form.Group label="Input Icon">
          <Form.Input
            icon="search"
            placeholder="Search for..."
            position="append"
            className={"mb-3"}
          />
          <Form.Input icon="user" placeholder="Username" />
        </Form.Group>
      </ComponentDemo>

      <Header.H3>Toggle switches</Header.H3>
      <ComponentDemo>
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
      </ComponentDemo>

      <Header.H3>Form fieldset</Header.H3>

      <ComponentDemo>
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
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsFormComponentsPage;

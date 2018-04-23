// @flow

import * as React from "react";

import { Page, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function FormElements() {
  return (
    <SiteWrapper>
      <Page.Card title="Form elements" RootComponent={Form}>
        <Grid.Row>
          <Grid.Col md={6} lg={4}>
            <Form.Group label="Static">
              <Form.StaticText>Username</Form.StaticText>
            </Form.Group>

            <Form.Group label="Text">
              <Form.Input name="example-text-input" placeholder="Text..." />
            </Form.Group>

            <Form.Group label="Disabled">
              <Form.Input
                disabled
                name="example-disabled-text-input"
                value="Well, she turned me into a newt."
              />
            </Form.Group>

            <Form.Group label="Read Only">
              <Form.Input
                readOnly
                name="example-readonly-text-input"
                value="Well, how'd you become king, then?"
              />
            </Form.Group>

            <Form.Group
              label={<Form.Label aside="56/100" children="Textarea" />}
            >
              <Form.Textarea
                name="example-textarea"
                rows={6}
                placeholder="Content.."
                defaultValue="Oh! Come and see the violence inherent in the system! Help,
                  help, I'm being repressed! We shall say 'Ni' again to you, if
                  you do not appease us. I'm not a witch. I'm not a witch.
                  Camelot!"
              />
            </Form.Group>

            <Form.Group label="Image Check">
              <Form.ImageCheck>
                <Form.ImageCheckItem
                  value={1}
                  imageURL="/demo/photos/nathan-anderson-316188-500.jpg"
                />
                <Form.ImageCheckItem
                  value={2}
                  imageURL="/demo/photos/nathan-dumlao-287713-500.jpg"
                />
                <Form.ImageCheckItem
                  value={3}
                  imageURL="./demo/photos/nicolas-picard-208276-500.jpg"
                />

                <Form.ImageCheckItem
                  value={4}
                  imageURL="./demo/photos/oskar-vertetics-53043-500.jpg"
                />
                <Form.ImageCheckItem
                  value={5}
                  imageURL="./demo/photos/priscilla-du-preez-181896-500.jpg"
                />
                <Form.ImageCheckItem
                  value={6}
                  imageURL="./demo/photos/ricardo-gomez-angel-262359-500.jpg"
                />

                <Form.ImageCheckItem
                  value={7}
                  imageURL="./demo/photos/sam-ferrara-136526-500.jpg"
                />
                <Form.ImageCheckItem
                  value={8}
                  imageURL="./demo/photos/sean-afnan-244576-500.jpg"
                />
                <Form.ImageCheckItem
                  value={9}
                  imageURL="./demo/photos/sophie-higginbottom-133982-500.jpg"
                />
              </Form.ImageCheck>
            </Form.Group>

            <Form.Group label="Color Check">
              <Form.ColorCheck>
                <Form.ColorCheckItem color="azure" />
                <Form.ColorCheckItem color="indigo" />
                <Form.ColorCheckItem color="purple" />

                <Form.ColorCheckItem color="pink" />
                <Form.ColorCheckItem color="red" />
                <Form.ColorCheckItem color="orange" />

                <Form.ColorCheckItem color="lime" />
                <Form.ColorCheckItem color="green" />
                <Form.ColorCheckItem color="teal" />
              </Form.ColorCheck>
            </Form.Group>

            <Form.Group label="Input Group">
              <Form.InputGroup>
                <Form.Input placeholder="Search for..." />
                <Form.InputGroup append>
                  <Button color="primary" href="http://www.google.com">
                    Go!
                  </Button>
                </Form.InputGroup>
              </Form.InputGroup>
            </Form.Group>

            <Form.Group label="Input Group Buttons">
              <Form.InputGroup>
                <Form.Input />
                <Form.InputGroup append>
                  <Button color="primary">Actions</Button>
                  <Button color="primary" isDropdownToggle />
                  <Dropdown.Menu position="right">
                    <Dropdown.Item>News</Dropdown.Item>
                    <Dropdown.Item>Messages</Dropdown.Item>
                    <Dropdown.ItemDivider />
                    <Dropdown.Item>Edit Profile</Dropdown.Item>
                  </Dropdown.Menu>
                </Form.InputGroup>
              </Form.InputGroup>
            </Form.Group>

            <Form.Group label="Input Icon">
              <Form.Input
                icon="search"
                placeholder="Search for..."
                position="append"
                className={"mb-3"}
              />
              <Form.Input icon="user" placeholder="Username" />
            </Form.Group>

            <Form.Group label="Seperated Inputs">
              <Form.Input
                icon="search"
                placeholder="Search for..."
                position="append"
                className={"mb-3"}
              />
              <Grid.Row gutters="xs">
                <Grid.Col>
                  <Form.Input placeholder="Search for..." />
                </Grid.Col>
                <Grid.Col auto>
                  <Button color="secondary" icon="search" />
                </Grid.Col>
              </Grid.Row>
            </Form.Group>

            <Form.Group label="ZIP Code">
              <Grid.Row gutters="xs">
                <Grid.Col>
                  <Form.Input placeholder="Search for..." />
                </Grid.Col>
                <Grid.Col auto className="align-self-center">
                  <Form.Help
                    message={
                      <React.Fragment>
                        <p>
                          ZIP Code must be US or CDN format. You can use an
                          extended ZIP+4 code to determine address more
                          accurately.
                        </p>
                        <p class="mb-0">
                          <a href="">USP ZIP codes lookup tools</a>
                        </p>
                      </React.Fragment>
                    }
                  />
                </Grid.Col>
              </Grid.Row>
            </Form.Group>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Form.Group label="Password">
              <Form.Input
                type="password"
                name="example-password-input"
                placeholder="Password..."
              />
            </Form.Group>

            <Form.Group label="Valid State">
              <Form.Input valid placeholder="Is Valid" />
              <Form.Input tick placeholder="Tick" className="mt-3" />
            </Form.Group>

            <Form.Group label="Invalid State">
              <Form.Input
                invalid
                feedback="Invalid feedback"
                placeholder="Is Invalid"
              />
              <Form.Input cross placeholder="Cross" className="mt-3" />
            </Form.Group>

            <Form.Group label="Select">
              <Form.Select>
                <option>United Kingdom</option>
                <option>Germany</option>
              </Form.Select>
            </Form.Group>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            {" "}
          </Grid.Col>
        </Grid.Row>
      </Page.Card>
    </SiteWrapper>
  );
}

export default FormElements;

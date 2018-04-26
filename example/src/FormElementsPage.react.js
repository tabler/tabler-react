// @flow

import * as React from "react";

import { Page, Grid, Form, Button, Dropdown } from "tabler-react";

import ComponentDemo from "./ComponentDemo";
import SiteWrapper from "./SiteWrapper.react";

function FormElements() {
  return (
    <SiteWrapper>
      <Page.Card title="Forms" RootComponent={Form}>
        <Grid.Row>
          <Grid.Col md={6} lg={4}>
            <ComponentDemo>
              <Form.Group label="Static">
                <Form.StaticText>Username</Form.StaticText>
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Text">
                <Form.Input name="example-text-input" placeholder="Text..." />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Disabled">
                <Form.Input
                  disabled
                  name="example-disabled-text-input"
                  value="Well, she turned me into a newt."
                />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Read Only">
                <Form.Input
                  readOnly
                  name="example-readonly-text-input"
                  value="Well, howd you become king, then?"
                />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group
                label={<Form.Label aside="56/100" children="Textarea" />}
              >
                <Form.Textarea
                  name="example-textarea"
                  rows={6}
                  placeholder="Content.."
                  defaultValue=" Oh! Come and see the violence inherent in the system! Help,
                  help, I'm being repressed! We shall say 'Ni' again to you, if
                  you do not appease us. I'm not a witch. I'm not a witch.
                  Camelot!"
                />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
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
            </ComponentDemo>

            <ComponentDemo>
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
            </ComponentDemo>

            <ComponentDemo>
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
            </ComponentDemo>

            <ComponentDemo>
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
            </ComponentDemo>

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
            <ComponentDemo>
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
            </ComponentDemo>

            <ComponentDemo>
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
            </ComponentDemo>
          </Grid.Col>

          <Grid.Col md={6} lg={4}>
            <ComponentDemo>
              <Form.Group label="Password">
                <Form.Input
                  type="password"
                  name="example-password-input"
                  placeholder="Password..."
                />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Valid State">
                <Form.Input valid placeholder="Is Valid" />
                <Form.Input tick placeholder="Tick" className="mt-3" />
              </Form.Group>
            </ComponentDemo>
            <ComponentDemo>
              <Form.Group label="Invalid State">
                <Form.Input
                  invalid
                  feedback="Invalid feedback"
                  placeholder="Is Invalid"
                />
                <Form.Input cross placeholder="Cross" className="mt-3" />
              </Form.Group>
            </ComponentDemo>
            <ComponentDemo>
              <Form.Group label="Select">
                <Form.Select>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </Form.Select>
              </Form.Group>
            </ComponentDemo>
            <ComponentDemo>
              <Form.Group label="Ratios">
                <Form.Ratio step={5} min={0} max={50} defaultValue={15} />
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Size">
                <Form.SelectGroup>
                  <Form.SelectGroupItem name="size" label="S" value="50" />
                  <Form.SelectGroupItem name="size" label="M" value="100" />
                  <Form.SelectGroupItem name="size" label="L" value="150" />
                  <Form.SelectGroupItem name="size" label="XL" value="200" />
                </Form.SelectGroup>
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Icons input">
                <Form.SelectGroup>
                  <Form.SelectGroupItem
                    name="device"
                    icon="smartphone"
                    value="smartphone"
                  />
                  <Form.SelectGroupItem
                    name="device"
                    icon="tablet"
                    value="tablet"
                  />
                  <Form.SelectGroupItem
                    name="device"
                    icon="monitor"
                    value="monitor"
                  />
                  <Form.SelectGroupItem name="device" icon="x" value="x" />
                </Form.SelectGroup>
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Icon input">
                <Form.SelectGroup pills>
                  <Form.SelectGroupItem name="weather" icon="sun" value="sun" />
                  <Form.SelectGroupItem
                    name="weather"
                    icon="moon"
                    value="moon"
                  />
                  <Form.SelectGroupItem
                    name="weather"
                    icon="cloud-rain"
                    value="rain"
                  />
                  <Form.SelectGroupItem
                    name="weather"
                    icon="cloud"
                    value="cloud"
                  />
                </Form.SelectGroup>
              </Form.Group>
            </ComponentDemo>

            <ComponentDemo>
              <Form.Group label="Your skills">
                <Form.SelectGroup pills canSelectMultiple>
                  <Form.SelectGroupItem
                    name="language"
                    label="HTML"
                    value="HTML"
                  />
                  <Form.SelectGroupItem
                    name="language"
                    label="CSS"
                    value="CSS"
                  />
                  <Form.SelectGroupItem
                    name="language"
                    label="JavaScript"
                    value="JavaScript"
                  />
                  <Form.SelectGroupItem
                    name="language"
                    label="Ruby"
                    value="Ruby"
                  />
                  <Form.SelectGroupItem
                    name="language"
                    label="Python"
                    value="Python"
                  />
                  <Form.SelectGroupItem
                    name="language"
                    label="C++"
                    value="C++"
                  />
                </Form.SelectGroup>
              </Form.Group>
            </ComponentDemo>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            3
          </Grid.Col>
        </Grid.Row>
      </Page.Card>
    </SiteWrapper>
  );
}

export default FormElements;

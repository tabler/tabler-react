// @flow

import * as React from "react";

import { Header, Button, Dropdown } from "tabler-react";

import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsButtonsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Buttons</Header.H2>

      <Header.H3>Button Tag</Header.H3>
      <p>
        Outputs a {`<button>`} by default but can changed using the 'as' prop
      </p>
      <ComponentDemo>
        <Button.List>
          <Button color="primary">Button</Button>
          <Button color="primary" RootComponent="a" href="#">
            Link
          </Button>
          {/* <Button color="primary" type="input" type="button" value="Input" /> */}
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button List</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button color="success">Save changes</Button>
          <Button color="secondary">Save and continue</Button>
          <Button color="danger">Cancel</Button>
        </Button.List>
      </ComponentDemo>

      <p>
        If the list is very long, it will automatically wrap on multiple lines,
        while keeping all buttons evenly spaced.
      </p>

      <ComponentDemo>
        <Button.List>
          <Button color="secondary">One</Button>
          <Button color="secondary">Two</Button>
          <Button color="secondary">Three</Button>
          <Button color="secondary">Four</Button>
          <Button color="secondary">Five</Button>
          <Button color="secondary">Six</Button>
          <Button color="secondary">Seven</Button>
          <Button color="secondary">Eight</Button>
          <Button color="secondary">Nine</Button>
          <Button color="secondary">Ten</Button>
          <Button color="secondary">Eleven</Button>
          <Button color="secondary">Twelve</Button>
          <Button color="secondary">Thirteen</Button>
          <Button color="secondary">Fourteen</Button>
          <Button color="secondary">Fifteen</Button>
          <Button color="secondary">Sixteen</Button>
          <Button color="secondary">Seventeen</Button>
          <Button color="secondary">Eighteen</Button>
          <Button color="secondary">Nineteen</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H4>List Buttons Alignment</Header.H4>

      <ComponentDemo>
        <Button.List align="center">
          <Button color="primary">color='primary'</Button>
          <Button color="secondary">color='secondary'</Button>
        </Button.List>
      </ComponentDemo>

      <ComponentDemo>
        <Button.List align="right">
          <Button color="primary">color='primary'</Button>
          <Button color="secondary">color='secondary'</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button Variations</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button color="primary">color='primary'</Button>
          <Button color="secondary">color='secondary'</Button>
          <Button color="success">color='success'</Button>
          <Button color="info">color='info'</Button>
          <Button color="warning">color='warning'</Button>
          <Button color="danger">color='danger'</Button>
          <Button link>Link</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Disabled Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button color="primary" disabled>
            Button
          </Button>
          <Button color="success" disabled RootComponent="a" href="#">
            Link
          </Button>
          <Button
            color="info"
            disabled
            RootComponent="input"
            type="button"
            value="Input"
          />
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button Colors</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button color="blue">Blue</Button>
          <Button color="azure">Azure</Button>
          <Button color="indigo">Indigo</Button>
          <Button color="purple">Purple</Button>
          <Button color="pink">Pink</Button>
          <Button color="red">Red</Button>
          <Button color="orange">Orange</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="lime">Lime</Button>
          <Button color="green">Green</Button>
          <Button color="teal">Teal</Button>
          <Button color="cyan">Cyan</Button>
          <Button color="gray">Gray</Button>
          <Button color="gray-dark">Dark gray</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Square Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button square color="primary">
            color='primary'
          </Button>
          <Button square color="secondary">
            color='secondary'
          </Button>
          <Button square color="success">
            color='success'
          </Button>
          <Button square color="info">
            color='info'
          </Button>
          <Button square color="warning">
            color='warning'
          </Button>
          <Button square color="danger">
            color='danger'
          </Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Pill Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button pill color="primary">
            color='primary'
          </Button>
          <Button pill color="secondary">
            color='secondary'
          </Button>
          <Button pill color="success">
            color='success'
          </Button>
          <Button pill color="info">
            color='info'
          </Button>
          <Button pill color="warning">
            color='warning'
          </Button>
          <Button pill color="danger">
            color='danger'
          </Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Outline Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button outline color="primary">
            color='primary'
          </Button>
          <Button outline color="secondary">
            color='secondary'
          </Button>
          <Button outline color="success">
            color='success'
          </Button>
          <Button outline color="info">
            color='info'
          </Button>
          <Button outline color="warning">
            color='warning'
          </Button>
          <Button outline color="danger">
            color='danger'
          </Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button Size</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Button</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Block Level button</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button block color="primary">
            Block level button
          </Button>
          <Button block color="secondary">
            Block level button
          </Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button with icon</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button color="dark" icon="upload">
            Upload
          </Button>
          <Button icon="heart" color="warning">
            I Like
          </Button>
          <Button icon="check" color="success">
            I agree
          </Button>
          <Button icon="plus" color="primary" outline>
            More
          </Button>
          <Button icon="link" color="danger">
            Link
          </Button>
          <Button icon="message-circle" color="info">
            Comment
          </Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Social Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button social="facebook">Facebook</Button>
          <Button social="twitter">Twitter</Button>
          <Button social="google">Google</Button>
          <Button social="youtube">Youtube</Button>
          <Button social="vimeo">Vimeo</Button>
          <Button social="dribbble">Dribbble</Button>
          <Button social="github">Github</Button>
          <Button social="instagram">Instagram</Button>
          <Button social="pinterest">Pinterest</Button>
          <Button social="vk">VKontakte</Button>
          <Button social="rss">RSS</Button>
          <Button social="flickr">Flickr</Button>
          <Button social="bitbucket">Bitbucket</Button>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Icon Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button social="facebook" />
          <Button social="github" />
          <Button color="primary" icon="activity" />
          <Button color="success" icon="bell" />
          <Button color="warning" icon="star" />
          <Button color="danger" icon="trash" />
          <Button color="purple" icon="bar-chart" />
          <Button color="secondary" icon="git-merge" />
        </Button.List>
      </ComponentDemo>

      <Header.H3>Button Dropdown</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Dropdown>
            <Dropdown.Trigger toggle color="secondary" icon="calendar" />
            <Dropdown.Menu>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Trigger color="secondary" icon="calendar">
              Show Calendar
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Trigger color="primary" toggle>
              Show Calendar
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
              <Dropdown.Item>Dropdown Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button.List>
      </ComponentDemo>

      <Header.H3>Loading Buttons</Header.H3>

      <ComponentDemo>
        <Button.List>
          <Button loading color="primary">
            Button text
          </Button>
          <Button loading color="success" icon="check" />
          <Button loading color="warning" size="sm">
            Button text
          </Button>
          <Button loading color="danger" size="lg">
            Button text
          </Button>
          <Button loading color="secondary" block>
            Button text
          </Button>
        </Button.List>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsButtonsPage;

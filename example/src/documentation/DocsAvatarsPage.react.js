// @flow
import * as React from "react";

import { Header, Avatar } from "tabler-react";

import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function Avatars(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Avatars</Header.H2>

      <Header.H3>Simple Avatar</Header.H3>

      <ComponentDemo>
        <Avatar imageURL="./demo/faces/male/21.jpg" />
      </ComponentDemo>

      <Header.H3>Avatar Icon</Header.H3>

      <ComponentDemo>
        <Avatar icon="users" />
      </ComponentDemo>

      <Header.H3>Avatars List</Header.H3>

      <ComponentDemo>
        <Avatar.List>
          <Avatar imageURL="/demo/faces/male/9.jpg" />
          <Avatar imageURL="/demo/faces/female/8.jpg" />
          <Avatar imageURL="/demo/faces/male/4.jpg" />
        </Avatar.List>
      </ComponentDemo>

      <Header.H4>Stacked List</Header.H4>

      <ComponentDemo>
        <Avatar.List stacked>
          <Avatar imageURL="/demo/faces/male/9.jpg" />
          <Avatar imageURL="/demo/faces/female/8.jpg" />
          <Avatar imageURL="/demo/faces/male/4.jpg" />
          <Avatar>+8</Avatar>
        </Avatar.List>
      </ComponentDemo>

      <Header.H3>Avatar Size</Header.H3>

      <ComponentDemo>
        <Avatar.List>
          <Avatar size="sm" imageURL="/demo/faces/male/9.jpg" />
          <Avatar imageURL="/demo/faces/female/8.jpg" />
          <Avatar size="md" imageURL="/demo/faces/male/4.jpg" />
          <Avatar size="lg" imageURL="/demo/faces/male/35.jpg" />
          <Avatar size="xl" imageURL="/demo/faces/female/29.jpg" />
          <Avatar size="xxl" imageURL="/demo/faces/male/2.jpg" />
        </Avatar.List>
      </ComponentDemo>

      <Header.H3>Avatar Status</Header.H3>

      <ComponentDemo>
        <Avatar.List>
          <Avatar imageURL="/demo/faces/male/9.jpg" />
          <Avatar status="grey" imageURL="/demo/faces/female/8.jpg" />
          <Avatar status="red" imageURL="/demo/faces/male/4.jpg" />
          <Avatar status="yellow" imageURL="/demo/faces/male/35.jpg" />
          <Avatar status="green" imageURL="/demo/faces/female/29.jpg" />
        </Avatar.List>
      </ComponentDemo>

      <Header.H3>Avatar Placeholder</Header.H3>

      <ComponentDemo>
        <Avatar.List>
          <Avatar>RB</Avatar>
          <Avatar>KH</Avatar>
          <Avatar>BK</Avatar>
          <Avatar placeholder />
        </Avatar.List>
      </ComponentDemo>

      <Header.H4>Placeholder Color</Header.H4>

      <ComponentDemo>
        <Avatar.List>
          <Avatar color="blue">NG</Avatar>
          <Avatar color="azure">AM</Avatar>
          <Avatar color="indigo">RB</Avatar>
          <Avatar color="purple">PR</Avatar>
          <Avatar color="pink">WH</Avatar>
          <Avatar color="red">MR</Avatar>
          <Avatar color="orange">DB</Avatar>
          <Avatar color="yellow">PP</Avatar>
          <Avatar color="lime">JR</Avatar>
          <Avatar color="green">RB</Avatar>
          <Avatar color="teal">KH</Avatar>
          <Avatar color="cyan">BK</Avatar>
          <Avatar color="gray">CA</Avatar>
          <Avatar color="gray-dark">CW</Avatar>
        </Avatar.List>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default Avatars;

// @flow

import * as React from "react";

import { Header, Tag, Icon } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsTagsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Tags</Header.H2>
      <p>Small tag labels to insert anywhere</p>

      <Header.H3>Default tag</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag>First tag</Tag>
          <Tag>Second tag</Tag>
          <Tag>Third tag</Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Link tag</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag link href="">
            First tag
          </Tag>
          <Tag link href="">
            Second tag
          </Tag>
          <Tag link href="">
            Third tag
          </Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Rounded tag</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag rounded>First tag</Tag>
          <Tag rounded>Second tag</Tag>
          <Tag rounded>Third tag</Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Color tag</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag color="blue">Blue</Tag>
          <Tag color="azure">Azure</Tag>
          <Tag color="indigo">Indigo</Tag>
          <Tag color="purple">Purple</Tag>
          <Tag color="pink">Pink</Tag>
          <Tag color="red">red</Tag>
          <Tag color="orange">Orange</Tag>
          <Tag color="yellow">Yellow</Tag>
          <Tag color="lime">Lime</Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Avatar tag</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag avatar="/demo/faces/female/16.jpg">Victoria</Tag>
          <Tag avatar="/demo/faces/male/41.jpg">Nathan</Tag>
          <Tag avatar="/demo/faces/female/1.jpg">Alice</Tag>
          <Tag avatar="/demo/faces/female/18.jpg">Rose</Tag>
          <Tag avatar="/demo/faces/male/16.jpg">Peter</Tag>
          <Tag avatar="/demo/faces/male/26.jpg">Wayne</Tag>
          <Tag avatar="/demo/faces/female/7.jpg">Michelle</Tag>
          <Tag avatar="/demo/faces/female/17.jpg">Debra</Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Tag remove</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag remove>First tag</Tag>
          <Tag remove>Second tag</Tag>
          <Tag remove>Third tag</Tag>
          <Tag remove>Fourth tag</Tag>
        </Tag.List>
      </ComponentDemo>

      <Header.H3>Tag addons</Header.H3>

      <ComponentDemo>
        <Tag.List>
          <Tag addOn={<Icon name="user" />}>A User</Tag>
          <Tag color="danger" addOnIcon="activity">
            NPM
          </Tag>
          <Tag addOn="passing" addOnColor="success">
            tests
          </Tag>
          <Tag color="dark" addOn="1kb" addOnColor="warning">
            CSS gzip size
          </Tag>
        </Tag.List>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsTagsPage;

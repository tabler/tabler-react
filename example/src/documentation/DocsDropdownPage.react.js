// @flow

import * as React from "react";

import { Header, Dropdown } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsDropdownPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Dropdowns</Header.H2>

      <Header.H3>Basic Dropdown</Header.H3>
      <ComponentDemo>
        <Dropdown>
          <Dropdown.Trigger>Menu</Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.ItemDivider />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ComponentDemo>

      <Header.H3>Trigger and Items from Props</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Dropdown
            trigger={<Dropdown.Trigger>Menu</Dropdown.Trigger>}
            items={
              <React.Fragment>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.ItemDivider />
                <Dropdown.Item>Logout</Dropdown.Item>
              </React.Fragment>
            }
            className="mr-4"
          />
          <Dropdown
            triggerContent="Menu"
            itemsObject={[
              {
                value: "Profile",
              },
              { isDivider: true },
              { value: "Logout" },
            ]}
          />
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Dropdown Variations</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Dropdown
            type="button"
            toggle={false}
            color="primary"
            arrow
            icon="globe"
            triggerContent="Button"
            itemsObject={[
              {
                value: "Profile",
              },
              { isDivider: true },
              { value: "Logout" },
            ]}
          />
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Dropdown Items</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Dropdown
            type="button"
            color="primary"
            arrow
            icon="globe"
            triggerContent="Item Icons and Badges"
            itemsObject={[
              {
                value: "Profile",
                icon: "user",
              },
              {
                value: "Notifications",
                badge: "New!",
                badgeType: "success",
              },
              { isDivider: true },
              { value: "Logout" },
            ]}
          />
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsDropdownPage;

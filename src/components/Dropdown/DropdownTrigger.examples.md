```jsx
import { Dropdown } from "tabler-react";

<Dropdown>
  <Dropdown.Trigger>Menu</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.ItemDivider />
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
```

#### Setting the trigger from Dropdown props

```jsx
import { Dropdown } from "tabler-react";

<Dropdown trigger={<Dropdown.Trigger>Menu</Dropdown.Trigger>}>
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.ItemDivider />
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
```

```jsx
import { Dropdown } from "tabler-react";

<Dropdown triggerContent="Menu">
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.ItemDivider />
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
```

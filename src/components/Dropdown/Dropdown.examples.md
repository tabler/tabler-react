### Basic Dropdown

```jsx
<Dropdown>
  <Dropdown.Trigger>Menu</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.ItemDivider />
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

### Dropdown Variations

```jsx
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
```

### Dropdown Items

```jsx
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
```

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

#### Adding a Menu and Items through props

Using the 'items' prop containing Dropdown.Items

```jsx
<Dropdown
  triggerContent="Menu"
  items={<Dropdown.Item>An Item</Dropdown.Item>}
/>
```

Or the 'itemsObject' array:

```jsx
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
```

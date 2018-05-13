```jsx
<Nav>
  <Nav.Item hasSubNav value="Menu 1">
    <Nav.SubItem value="Sub Item 1" />
    <Nav.SubItem>Sub Item 2</Nav.SubItem>
    <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
  </Nav.Item>
</Nav>
```

#### With sub-items from component based prop

```jsx
<Nav>
  <Nav.Item
    hasSubNav
    value="Menu 1"
    subItems={
      <React.Fragment>
        <Nav.SubItem value="Sub Item 1" />
        <Nav.SubItem>Sub Item 2</Nav.SubItem>
        <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
      </React.Fragment>
    }
  />
</Nav>
```

#### With sub-item from objects props

```jsx
<Nav>
  <Nav.Item
    hasSubNav
    value="Menu 1"
    subItemsObjects={[
      {
        value: "Sub Item 1",
      },
      {
        value: "Sub Item 2",
      },
      {
        value: "Sub Item 3",
        icon: "globe",
      },
    ]}
  />
</Nav>
```

```jsx
<Nav>
  <Nav.Item>
    <Nav.Link to="http://www.example.com" icon="globe">
      Page One
    </Nav.Link>
  </Nav.Item>
  <Nav.Item to="http://www.example.com">Page Two</Nav.Item>
  <Nav.Item value="Page Three" />
  <Nav.Item active icon="user">
    Page Four
  </Nav.Item>
</Nav>
```

### With a sub-nav

```jsx
<Nav>
  <Nav.Item hasSubNav value="Menu 1">
    <Nav.SubItem value="Sub Item 1" />
    <Nav.SubItem>Sub Item 2</Nav.SubItem>
    <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
  </Nav.Item>
</Nav>
```

```jsx
<Table>
  <Table.Header>
    <Table.ColHeader>ID</Table.ColHeader>
    <Table.ColHeader>Name</Table.ColHeader>
    <Table.ColHeader>Action</Table.ColHeader>
  </Table.Header>
</Table>
```

### Build header from Table props

```jsx
<Table
  headerItems={[{ content: "ID" }, { content: "Name" }, { content: "Action" }]}
/>
```

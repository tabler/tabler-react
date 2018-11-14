```jsx
<Table>
  <Table.Body>
    <Table.Row>
      <Table.Col>1</Table.Col>
      <Table.Col>Jon</Table.Col>
      <Table.Col>
        <Button color="primary">Edit</Button>
      </Table.Col>
    </Table.Row>
  </Table.Body>
</Table>
```

### Build body from Table props

```jsx
<Table
  bodyItems={[
    {
      key: 1,
      item: [
        { content: "1" },
        { content: "Jon" },
        { content: <Button color="primary">Edit</Button> },
      ],
    },
  ]}
>
  <Table.Header>
    <Table.ColHeader>ID</Table.ColHeader>
    <Table.ColHeader>Name</Table.ColHeader>
    <Table.ColHeader>Action</Table.ColHeader>
  </Table.Header>
</Table>
```

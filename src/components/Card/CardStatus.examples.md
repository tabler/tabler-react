```jsx
<Grid.Row cards deck>
  <Grid.Col md={6}>
    <Card
      statusColor="purple"
      title="Card status"
      body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur
        perferendis sed suscipit velit vitae voluptatem. A consequuntur,
        deserunt eaque error nulla temporibus!`}
    />
  </Grid.Col>
  <Grid.Col md={6}>
    <Card>
      <Card.Status color="blue" side />
      <Card.Header>
        <Card.Title>Card status left side</Card.Title>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis
        sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque
        error nulla temporibus!
      </Card.Body>
    </Card>
  </Grid.Col>
</Grid.Row>
```

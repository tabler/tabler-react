```jsx
<TabbedCard initialTab="Hello">
  <Tab title="Hello">Hello World</Tab>
  <Tab title="Goodbye">Goodbye</Tab>
  <Tab title="Complex">
    <Grid.Row cards deck>
      <Grid.Col md={4}>
        <Card body="Short content" />
      </Grid.Col>
      <Grid.Col md={4}>
        <Card body="Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
      </Grid.Col>
      <Grid.Col md={4}>
        <Card body="Short content" />
      </Grid.Col>
    </Grid.Row>
  </Tab>
</TabbedCard>
```

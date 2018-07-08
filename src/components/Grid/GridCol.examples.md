```jsx
<Grid.Row>
  <Grid.Col>1</Grid.Col>
  <Grid.Col>2</Grid.Col>
  <Grid.Col>3</Grid.Col>
  <Grid.Col>4</Grid.Col>
  <Grid.Col>5</Grid.Col>
  <Grid.Col>6</Grid.Col>
  <Grid.Col>7</Grid.Col>
  <Grid.Col>8</Grid.Col>
  <Grid.Col>9</Grid.Col>
  <Grid.Col>10</Grid.Col>
  <Grid.Col>11</Grid.Col>
  <Grid.Col>12</Grid.Col>
</Grid.Row>
```

### Column Width

```jsx
<Grid.Row>
  <Grid.Col width={2}>1</Grid.Col>
  <Grid.Col width={4}>2</Grid.Col>
  <Grid.Col width={6}>3</Grid.Col>
</Grid.Row>
```

### Responsive Column Width

```jsx
<Grid.Row>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    1
  </Grid.Col>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    2
  </Grid.Col>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    3
  </Grid.Col>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    4
  </Grid.Col>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    5
  </Grid.Col>
  <Grid.Col xl={1} lg={2} md={4} sm={6} xs={12}>
    6
  </Grid.Col>
</Grid.Row>
```

### Column Offset

```jsx
<Grid.Row>
  <Grid.Col width={6} offset={3}>
    2
  </Grid.Col>
  <Grid.Col md={6} offsetMd={3}>
    4
  </Grid.Col>
</Grid.Row>
```

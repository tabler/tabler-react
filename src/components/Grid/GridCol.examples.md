```jsx
import { Grid } from "tabler-react";

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
</Grid.Row>;
```

### Column Width

```jsx
import { Grid } from "tabler-react";

<Grid.Row>
  <Grid.Col col={2}>1</Grid.Col>
  <Grid.Col col={4}>2</Grid.Col>
  <Grid.Col col={6}>3</Grid.Col>
</Grid.Row>;
```

### Responsive Column Width

```jsx
import { Grid } from "tabler-react";

<Grid.Row>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    1
  </Grid.Col>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    2
  </Grid.Col>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    3
  </Grid.Col>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    4
  </Grid.Col>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    5
  </Grid.Col>
  <Grid.Col xxl={1} xl={2} lg={4} md={6} sm={12}>
    6
  </Grid.Col>
</Grid.Row>;
```

### Column Offset

```jsx
import { Grid } from "tabler-react";

<Grid.Row>
  <Grid.Col col={6} offset={3}>
    2
  </Grid.Col>
  <Grid.Col md={6} offsetMd={3}>
    4
  </Grid.Col>
</Grid.Row>;
```

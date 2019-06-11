```jsx
import { Form } from "tabler-react";

<Form.Input name="username" placeholder="Username" />;
```

#### Input Label

Render an input wrapped in a Form.Group with a Label

```jsx
import { Form } from "tabler-react";

<Form.Input label="username" placeholder="Username" />;
```

is the same as

```jsx
import { Form } from "tabler-react";

<Form.Group>
  <Form.Label>Username</Form.Label>
  <Form.Input placeholder="Username" />
</Form.Group>;
```

#### Input Icons

```jsx
import { Form } from "tabler-react";

<Form.Group label="Input Icon">
  <Form.Input icon="user" placeholder="Username" />
</Form.Group>;
```

#### Append the Icon

```jsx
import { Form } from "tabler-react";

<Form.Group label="Input Icon">
  <Form.Input icon="search" placeholder="Search for..." position="append" />
</Form.Group>;
```

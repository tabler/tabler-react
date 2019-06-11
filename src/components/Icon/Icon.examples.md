```jsx
import { Icon } from "tabler-react";

<Icon name="user" />;
```

#### Changing the prefix to use fontawesome

First you need to add font awesome to your project.

In your HTML `<head>`:

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>
```

Then use the Icon `prefix` prop

```jsx
import { Icon } from "tabler-react";

<Icon prefix="fa" name="user" />;
```

#### Rendering a flag

```jsx
import { Icon } from "tabler-react";

<Icon flag name="gb" />;
```

#### Rendering a payment icon

```jsx
import { Icon } from "tabler-react";

<Icon payment name="visa" />;
```

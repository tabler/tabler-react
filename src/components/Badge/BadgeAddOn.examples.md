```jsx
import { Badge } from "tabler-react";

<Badge.List>
  <Badge addOn={<Icon name="user" />}>A User</Badge>
  <Badge color="danger" addOnIcon="activity">
    NPM
  </Badge>
  <Badge addOn="passing" addOnColor="success">
    tests
  </Badge>
  <Badge color="dark" addOn="1kb" addOnColor="warning">
    CSS gzip size
  </Badge>
</Badge.List>;
```

```jsx
import { Form } from "tabler-react";

<Form.Group label="Date">
  <Form.MaskedInput
    placeholder="00/00/0000"
    mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
  />
</Form.Group>;
```

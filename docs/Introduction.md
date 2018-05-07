> Please note: we're working fast towards [version 1.0](https://github.com/tabler/tabler-react/milestone/1) and until then all releases should be considered unstable and potentially breaking

**[Demo](https://tabler.github.io/tabler-react/)** | **[Issues](https://github.com/tabler/tabler-react/issues)** | **[Slack](https://tabler-ui.slack.com/messages/CA55LDVHU/)**.

## Install

Make sure you have [Node.js](https://nodejs.org/) 8+ and [npm](https://npmjs.com/) installed.

`npm install --save tabler-react` or `yarn add tabler-react`

## Basic Usage Example

```jsx static
import React, { Component } from "react";

import { Card, Button } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
    );
  }
}
```

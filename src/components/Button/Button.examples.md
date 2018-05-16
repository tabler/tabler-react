### Root Component

By default a Button will render a <button>, you can change this with the RootComponent prop

```jsx
<Button.List>
  <Button color="primary">Button</Button>
  <Button color="primary" RootComponent="a" href="#">
    Link
  </Button>
</Button.List>
```

### Button Variations

```jsx
<Button.List>
  <Button color="primary">color='primary'</Button>
  <Button color="secondary">color='secondary'</Button>
  <Button color="success">color='success'</Button>
  <Button color="info">color='info'</Button>
  <Button color="warning">color='warning'</Button>
  <Button color="danger">color='danger'</Button>
  <Button link>Link</Button>
</Button.List>
```

### Disabled Buttons

```jsx
<Button.List>
  <Button color="primary" disabled>
    Button
  </Button>
  <Button color="success" disabled RootComponent="a" href="#">
    Link
  </Button>
  <Button
    color="info"
    disabled
    RootComponent="input"
    type="button"
    value="Input"
  />
</Button.List>
```

### Button Colors

```jsx
<Button.List>
  <Button color="blue">Blue</Button>
  <Button color="azure">Azure</Button>
  <Button color="indigo">Indigo</Button>
  <Button color="purple">Purple</Button>
  <Button color="pink">Pink</Button>
  <Button color="red">Red</Button>
  <Button color="orange">Orange</Button>
  <Button color="yellow">Yellow</Button>
  <Button color="lime">Lime</Button>
  <Button color="green">Green</Button>
  <Button color="teal">Teal</Button>
  <Button color="cyan">Cyan</Button>
  <Button color="gray">Gray</Button>
  <Button color="gray-dark">Dark gray</Button>
</Button.List>
```

### Square Buttons

```jsx
<Button.List>
  <Button square color="primary">
    color='primary'
  </Button>
  <Button square color="secondary">
    color='secondary'
  </Button>
  <Button square color="success">
    color='success'
  </Button>
  <Button square color="info">
    color='info'
  </Button>
  <Button square color="warning">
    color='warning'
  </Button>
  <Button square color="danger">
    color='danger'
  </Button>
</Button.List>
```

### Pill Buttons

```jsx
<Button.List>
  <Button pill color="primary">
    color='primary'
  </Button>
  <Button pill color="secondary">
    color='secondary'
  </Button>
  <Button pill color="success">
    color='success'
  </Button>
  <Button pill color="info">
    color='info'
  </Button>
  <Button pill color="warning">
    color='warning'
  </Button>
  <Button pill color="danger">
    color='danger'
  </Button>
</Button.List>
```

### Outline Buttons

```jsx
<Button.List>
  <Button outline color="primary">
    color='primary'
  </Button>
  <Button outline color="secondary">
    color='secondary'
  </Button>
  <Button outline color="success">
    color='success'
  </Button>
  <Button outline color="info">
    color='info'
  </Button>
  <Button outline color="warning">
    color='warning'
  </Button>
  <Button outline color="danger">
    color='danger'
  </Button>
</Button.List>
```

### Button Size

```jsx
<Button.List>
  <Button size="sm">Small</Button>
  <Button>Default</Button>
  <Button size="lg">Button</Button>
</Button.List>
```

### Block Level button

```jsx
<Button.List>
  <Button block color="primary">
    Block level button
  </Button>
  <Button block color="secondary">
    Block level button
  </Button>
</Button.List>
```

### Button with icon

```jsx
<Button.List>
  <Button color="dark" icon="upload">
    Upload
  </Button>
  <Button icon="heart" color="warning">
    I Like
  </Button>
  <Button icon="check" color="success">
    I agree
  </Button>
  <Button icon="plus" color="primary" outline>
    More
  </Button>
  <Button icon="link" color="danger">
    Link
  </Button>
  <Button icon="message-circle" color="info">
    Comment
  </Button>
</Button.List>
```

### Social Buttons

```jsx
<Button.List>
  <Button social="facebook">Facebook</Button>
  <Button social="twitter">Twitter</Button>
  <Button social="google">Google</Button>
  <Button social="youtube">Youtube</Button>
  <Button social="vimeo">Vimeo</Button>
  <Button social="dribbble">Dribbble</Button>
  <Button social="github">Github</Button>
  <Button social="instagram">Instagram</Button>
  <Button social="pinterest">Pinterest</Button>
  <Button social="vk">VKontakte</Button>
  <Button social="rss">RSS</Button>
  <Button social="flickr">Flickr</Button>
  <Button social="bitbucket">Bitbucket</Button>
</Button.List>
```

### Icon Buttons

```jsx
<Button.List>
  <Button social="facebook" />
  <Button social="github" />
  <Button color="primary" icon="activity" />
  <Button color="success" icon="bell" />
  <Button color="warning" icon="star" />
  <Button color="danger" icon="trash" />
  <Button color="purple" icon="bar-chart" />
  <Button color="secondary" icon="git-merge" />
</Button.List>
```

### Button Dropdown

```jsx
<Button.List>
  <Dropdown
    type="button"
    toggle
    color="secondary"
    icon="calendar"
    items={[
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
    ]}
  />
  <Dropdown
    value="Show Calendar"
    color="secondary"
    icon="calendar"
    items={[
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
    ]}
  />
  <Dropdown
    value="Show Calendar"
    color="primary"
    toggle
    items={[
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
      <Dropdown.Item>Dropdown Link</Dropdown.Item>,
    ]}
  />
</Button.List>
```

### Loading Buttons

```jsx
<Button.List>
  <Button loading color="primary">
    Button text
  </Button>
  <Button loading color="success" icon="check" />
  <Button loading color="warning" size="sm">
    Button text
  </Button>
  <Button loading color="danger" size="lg">
    Button text
  </Button>
  <Button loading color="secondary" block>
    Button text
  </Button>
</Button.List>
```

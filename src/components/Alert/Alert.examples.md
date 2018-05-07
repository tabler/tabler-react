```jsx
<Alert type="primary" hasExtraSpace>
  <strong>Work in progress!</strong> More detailed documentation is coming soon.
</Alert>
```

### Alert Types

```jsx
<Alert type="primary">
  This is a <strong>primary</strong> alert—check it out!
</Alert>
<Alert type="secondary">
  This is a <strong>secondary</strong> alert—check it out!
</Alert>
<Alert type="success">
  This is a <strong>success</strong> alert—check it out!
</Alert>
<Alert type="info">
  This is a <strong>info</strong> alert—check it out!
</Alert>
<Alert type="warning">
  This is a <strong>warning</strong> alert—check it out!
</Alert>
<Alert type="danger">
  This is a <strong>danger</strong> alert—check it out!
</Alert>
```

### Alert With Icon

```jsx
<Alert type="primary" icon="bell">
  You have done 5 actions.
</Alert>
<Alert type="success" icon="check">
  The page has been added.
</Alert>
<Alert type="danger" icon="alert-triangle">
  The daily report has failed. Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Lorem ipsum dolor sit amet, consectetur
  adipisicing elit.
</Alert>
```

### Alert isDismissible

```jsx
<Alert type="warning" isDismissible>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
```

### Alert with avatar

```jsx
<Alert type="primary" avatar="./demo/faces/male/4.jpg">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit.
</Alert>
```

### Alert with buttons

```jsx
<Alert type="primary" isDismissible>
  <Header.H4>Some Message</Header.H4>
  <p>
    Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore
    minim voluptate.
  </p>
  <Button.List>
    <Button color="success" RootComponent="button">
      Okay
    </Button>
    <Button color="secondary" RootComponent="button">
      No, thanks
    </Button>
  </Button.List>
</Alert>
```

### Alert with extra space

```jsx
<span>Content Above</span>
<Alert type="primary" hasExtraSpace>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
<span>Content Below</span>
```

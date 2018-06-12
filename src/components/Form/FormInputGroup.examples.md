```jsx
<Form.InputGroup append={<Button
        RootComponent="a"
        color="primary"
        href="http://www.google.com"
    >Go!
    </Button>}>
    <Form.Input placeholder="Search for..." />
</Form.InputGroup>
```

```jsx
<Form.InputGroup inputProps={{placeholder: "Search for..."}} append={<Button
        RootComponent="a"
        color="primary"
        href="http://www.google.com"
    >Go!
    </Button>} />
```


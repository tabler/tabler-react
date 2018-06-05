
```jsx
<Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
  <Form.Input name='username' label='Username' placeholder='Enter Username' />
  <Button type='submit' value='Submit' />
</Form>
```

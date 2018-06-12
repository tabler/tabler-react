```jsx
<SocialNetworksList
  itemsObjects={[
    { name: "twitter", to: "http://www.twitter.com" },
    { name: "linkedin", to: "http://www.linkedin.com" },
  ]}
/>
```

#### As buttons

```jsx
<SocialNetworksList
  itemsObjects={[
    { name: "twitter", label: "Follow", to: "http://www.twitter.com"},
    { name: "linkedin", label: "Connect", color: "blue", to: "http://www.linkedin.com" },
  ]}
  prefix="fa"
  asButtons
/>
```

#### Items as components

```jsx
<SocialNetworksList
  items={[
    <a href="http://www.twitter.com">
      <Icon prefix="fa" name="twitter" />
    </a>,
    <a href="http://www.facebook.com">
      <Icon prefix="fa" name="facebook" />
    </a>,
  ]}
/>
```

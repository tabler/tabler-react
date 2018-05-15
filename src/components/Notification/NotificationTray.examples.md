```jsx
<NotificationTray
  notificationsObjects={[
    {
      avatarURL: "demo/faces/male/41.jpg",
      message: (
        <React.Fragment>
          <strong>Nathan</strong> pushed new commit: Fix page load performance
          issue.
        </React.Fragment>
      ),
      time: "10 minutes ago",
    },
    {
      avatarURL: "demo/faces/female/1.jpg",
      message: (
        <React.Fragment>
          <strong>Alice</strong> started new task: Tabler UI design.
        </React.Fragment>
      ),
      time: "1 hour ago",
    },
    {
      avatarURL: "demo/faces/female/18.jpg",
      message: (
        <React.Fragment>
          <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
        </React.Fragment>
      ),
      time: "2 hours ago",
    },
  ]}
/>
```

```jsx
<NotificationTray unread={true}>
  <Notification
    avatarURL="demo/faces/male/41.jpg"
    message={
      <React.Fragment>
        <strong>Nathan</strong> pushed new commit: Fix page load performance
        issue.
      </React.Fragment>
    }
    time="10 minutes ago"
  />
  <Notification
    avatarURL="demo/faces/female/1.jpg"
    message={
      <React.Fragment>
        <strong>Alice</strong> started new task: Tabler UI design.
      </React.Fragment>
    }
    time="1 hour ago"
  />
  <Notification
    avatarURL="demo/faces/female/18.jpg"
    message={
      <React.Fragment>
        <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
      </React.Fragment>
    }
    time="2 hours ago"
  />
</NotificationTray>
```

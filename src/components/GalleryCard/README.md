## Gallery Card Component

### Usage

```jsx
import { GalleryCard } from 'tabler-react'
...
...

<GalleryCard>
    <GalleryCard.Image src="https://tabler.github.io/tabler/demo/photos/grant-ritchie-338179-500.jpg" />
    <GalleryCard.Footer>
        <GalleryCard.Details
            avatarURL="https://tabler.github.io/tabler/demo/faces/male/41.jpg"
            fullName="Nathar Guerrero"
            dateString="12 days ago"
        />
        <GalleryCard.IconGroup>
            <GalleryCard.IconItem name="eye" label="112" />
            <GalleryCard.IconItem
                name="heart"
                label="42"
                right
            />
        </GalleryCard.IconGroup>
    </GalleryCard.Footer>
</GalleryCard>
```

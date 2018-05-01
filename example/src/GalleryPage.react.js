// @flow

import * as React from "react";

import { Page, Grid, GalleryCard } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

import json from "./data/Gallery.Items";
// TODO:Add GalleryCardList component to avoid insert extra className
// TODO:Update Page.Header to additional components

function GalleryPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content>
        <Page.Header>Gallery</Page.Header>

        <Grid.Row className="row-cards">
          {json.items.map(item => (
            <Grid.Col sm={6} lg={4}>
              <GalleryCard>
                <GalleryCard.Image
                  src={item.imageURL}
                  alt={`Photo by ${item.fullName}`}
                />
                <GalleryCard.Footer>
                  <GalleryCard.Details
                    avatarURL={item.avatarURL}
                    fullName={item.fullName}
                    dateString={item.dateString}
                  />
                  <GalleryCard.IconGroup>
                    <GalleryCard.IconItem name="eye" label={item.totalView} />
                    <GalleryCard.IconItem
                      name="heart"
                      label={item.totalLike}
                      right
                    />
                  </GalleryCard.IconGroup>
                </GalleryCard.Footer>
              </GalleryCard>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default GalleryPage;

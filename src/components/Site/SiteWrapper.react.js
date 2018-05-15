// @flow

import * as React from "react";

import { Page, Site } from "../";
import type { Props as SiteHeaderProps } from "./SiteHeader.react";
import type { Props as SiteNavProps } from "./SiteNav.react";

type Props = SiteHeaderProps &
  SiteNavProps & {|
    +children: React.Node,
  |};

function SiteWrapper(props: Props): React.Node {
  const {
    href,
    alt,
    imageURL,
    withNotifications,
    notificationsObjects,
    items: navItems,
    itemsObjects: navItemsObjects,
    withSearchForm,
    rightColumnComponent,
  } = props;
  return (
    <Page>
      <Page.Main>
        <Site.Header
          href={href}
          alt={alt}
          imageURL={imageURL}
          withNotifications={withNotifications}
          notificationsObjects={notificationsObjects}
        />
        <Site.Nav
          items={navItems}
          itemsObjects={navItemsObjects}
          withSearchForm={withSearchForm}
          rightColumnComponent={rightColumnComponent}
        />
        {props.children}
      </Page.Main>
      <Site.Footer />
    </Page>
  );
}

SiteWrapper.displayName = "Site.Wrapper";

export default SiteWrapper;

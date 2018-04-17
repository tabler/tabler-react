// @flow

import * as React from "react";
import cn from "classnames";
import PageMain from "./PageMain.react";
import PageContent from "./PageContent.react";
import PageHeader from "./PageHeader.react";
import PageContentWithSidebar from "./PageContentWithSidebar.react";
import PageCard from "./PageCard.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Page({ className, children }: Props): React.Node {
  const classes = cn("page", className);
  return <div className={classes}>{children}</div>;
}

Page.Main = PageMain;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.ContentWithSidebar = PageContentWithSidebar;
Page.Card = PageCard;

export default Page;

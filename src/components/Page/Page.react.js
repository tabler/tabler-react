// @flow

import * as React from "react";

import PageMain from "./PageMain.react";
import PageContent from "./PageContent.react";
import PageHeader from "./PageHeader.react";
import PageContentWithSidebar from "./PageContentWithSidebar.react";
import PageCard from "./PageCard.react";

type Props = {|
  +children?: React.Node,
|};

const Page = (props: Props): React.Node => (
  <div className={"page"} {...props} />
);

Page.Main = PageMain;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.ContentWithSidebar = PageContentWithSidebar;
Page.Card = PageCard;

export default Page;

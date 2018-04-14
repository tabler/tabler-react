// @flow

import * as React from "react";

import PageMain from "./PageMain";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import PageContentWithSidebar from "./PageContentWithSidebar";
import PageCard from "./PageCard";

type Props = {|
  +children?: React.Node
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

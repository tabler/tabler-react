import * as React from "react";
import cn from "classnames";
import PageMain from "./PageMain";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import PageContentWithSidebar from "./PageContentWithSidebar";
import PageCard from "./PageCard";
import PageTitle from "./PageTitle";
import PageMapHeader from "./PageMapHeader";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Page({ className, children }: Props) {
  const classes = cn("page", className);
  return <div className={classes}>{children}</div>;
}

Page.Main = PageMain;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.ContentWithSidebar = PageContentWithSidebar;
Page.Card = PageCard;
Page.Title = PageTitle;
Page.MapHeader = PageMapHeader;

export default Page;

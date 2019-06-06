import Page from "./Page";

import PageMain from "./PageMain";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import PageContentWithSidebar from "./PageContentWithSidebar";
import PageCard from "./PageCard";
import PageTitle from "./PageTitle";
import PageMapHeader from "./PageMapHeader";

const CompoundPage = Object.assign(Page, {
  Main: PageMain,
  Content: PageContent,
  Header: PageHeader,
  ContentWithSidebar: PageContentWithSidebar,
  Card: PageCard,
  Title: PageTitle,
  MapHeader: PageMapHeader,
});

export {
  CompoundPage as default,
  Page,
  PageMain,
  PageContent,
  PageHeader,
  PageContentWithSidebar,
  PageCard,
  PageTitle,
  PageMapHeader,
};

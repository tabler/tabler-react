import * as React from 'react';

import PageMain from './PageMain';
import PageContent from './PageContent';
import PageHeader from './PageHeader';
import PageContentWithSidebar from './PageContentWithSidebar';
import PageCard from './PageCard';
import PageTitle from './PageTitle';

declare namespace Page {
    interface IPageProps<T> extends React.HTMLProps<T> {
    }
    type Props = IPageProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Main: PageMain.Component;
      Content: PageContent.Component;
      Header: PageHeader.Component;
      ContentWithSidebar: PageContentWithSidebar.Component;
      Card: PageCard.Component;
      Title: PageTitle.Component;
    }
}
declare const Page: Page.Component & Page.NestedComponents;
export = Page;

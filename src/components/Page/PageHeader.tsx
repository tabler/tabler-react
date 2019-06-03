// @flow

import * as React from "react";
import PageTitle from "./PageTitle";
import PageSubTitle from "./PageSubTitle";
import PageOptions from "./PageOptions";

type Props = {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  options?: React.ReactNode;
};

function PageHeader({ children, title, subTitle, options }: Props) {
  return (
    <div className="page-header">
      {title && <PageTitle>{title}</PageTitle>}
      {subTitle && <PageSubTitle>{subTitle}</PageSubTitle>}
      {options && <PageOptions>{options}</PageOptions>}
      {children}
    </div>
  );
}

PageHeader.displayName = "Page.Header";

export default PageHeader;

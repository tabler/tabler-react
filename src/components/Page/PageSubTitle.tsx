import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function PageSubTitle({ children }: Props) {
  return <div className="page-subtitle">{children}</div>;
}

PageSubTitle.displayName = "Page.SubTitle";

export default PageSubTitle;

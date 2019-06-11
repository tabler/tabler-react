import * as React from "react";
import cn from "classnames";
import Container from "../Container";
import PageHeader from "./PageHeader";

type Props = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
  options?: React.ReactNode;
};

function PageContent({ className, children, title, subTitle, options }: Props) {
  const classes = cn("page-content d-flex flex-fill max-w-full", className);
  return (
    <div className={classes}>
      <div className="flex-fill px-lg-2 mw-100">
        <Container className="my-4">
          {(title || subTitle || options) && (
            <PageHeader title={title} subTitle={subTitle} options={options} />
          )}
          {children}
        </Container>
      </div>
    </div>
  );
}

PageContent.displayName = "Page.Content";

export default PageContent;

import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage";
import { Props as DefaultErrorProps } from "./DefaultErrorPage";

function Error500Page({
  title = "500",
  subtitle = "Oops... You just found an error page...",
  details = "We are sorry but your request contains bad syntax and cannot be fulfilled...",
  action,
}: DefaultErrorProps) {
  return (
    <DefaultErrorPage
      title={title}
      subtitle={subtitle}
      details={details}
      action={action}
    />
  );
}

export default Error500Page;

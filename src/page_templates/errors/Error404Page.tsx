import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage";
import { Props as DefaultErrorProps } from "./DefaultErrorPage";

function Error404Page({
  title = "404",
  subtitle = "Oops... You just found an error page...",
  details = "We are sorry but the page you have requested can not be found...",
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

export default Error404Page;

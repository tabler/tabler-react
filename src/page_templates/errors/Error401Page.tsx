import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage";
import { Props as DefaultErrorProps } from "./DefaultErrorPage";

function Error401Page({
  title = "401",
  subtitle = "Oops... You just found an error page...",
  details = "We are sorry but you are not authorized to access this page...",
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

export default Error401Page;

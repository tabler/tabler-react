import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage";
import { Props as DefaultErrorProps } from "./DefaultErrorPage";

function Error403Page({
  title = "403",
  subtitle = "Oops... You just found an error page...",
  details = "We are sorry but you do not have permission to access this page...",
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

export default Error403Page;

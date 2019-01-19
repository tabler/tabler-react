// @flow

import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage.react";
import type { Props as DefaultErrorProps } from "./DefaultErrorPage.react";

function Error400Page({
  title = "400",
  subtitle = "Oops... You just found an error page...",
  details = "We are sorry but your request contains bad syntax and cannot be fulfilled...",
  action,
}: DefaultErrorProps): React.Node {
  return (
    <DefaultErrorPage
      title={title}
      subtitle={subtitle}
      details={details}
      action={action}
    />
  );
}

export default Error400Page;

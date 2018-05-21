// @flow

import * as React from "react";

import DefaultErrorPage from "./DefaultErrorPage.react";
import type { Props as DefaultErrorProps } from "./DefaultErrorPage.react";

function Error503Page({
  title = "503",
  subtitle = "Oops... You just found an error page...",
  details = "This page is temporarily unavailable.  Please reload your browser...",
}: DefaultErrorProps): React.Node {
  return (
    <DefaultErrorPage title={title} subtitle={subtitle} details={details} />
  );
}

export default Error503Page;

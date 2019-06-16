import * as React from "react";

export interface SiteProps {
  children: React.ReactNode;
}

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props: SiteProps) {
  return props.children;
}

/** @component */
export default Site;

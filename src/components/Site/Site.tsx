import * as React from "react";

export type Props = {
  children: React.ReactNode;
};

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props: Props) {
  return props.children;
}

Site.displayName = "Site";

/** @component */
export default Site;

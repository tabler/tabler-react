// @flow

import * as React from "react";

type Props = {|
  +href?: string,
  +src?: string,
  +alt?: string,
|};

const SiteLogo = (props: Props): React.Node => (
  <a className="header-brand" href={props.href}>
    <img src={props.src} className="header-brand-img" alt={props.alt} />
  </a>
);

SiteLogo.displayName = "Site.Logo";

export default SiteLogo;

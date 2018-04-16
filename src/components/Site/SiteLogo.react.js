// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +href: string,
  +src: string,
  +alt: string,
|};

const SiteLogo = (props: Props): React.Node => (
  <a className="navbar-brand" href={props.href}>
    <img src={props.src} className="navbar-brand-img" alt={props.alt} />
  </a>
);

export default SiteLogo;

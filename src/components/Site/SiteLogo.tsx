import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import { string } from "prop-types";

interface Props extends TablerComponent {
  href?: string;
  src?: string;
  srcSmall?: string;
  alt?: string;
}

const SiteLogo = ({ className, ...props }: Props) => {
  const _className = cn("navbar-brand", className);
  return (
    <a className={_className} href={props.href} {...props}>
      <img
        src={props.src}
        className="d-none d-md-block navbar-brand-logo"
        alt={props.alt}
      />
      {props.srcSmall && (
        <img
          src={props.srcSmall}
          className="d-md-none navbar-brand-logo"
          alt={props.alt}
        />
      )}
    </a>
  );
};

SiteLogo.displayName = "Site.Logo";

export default SiteLogo;

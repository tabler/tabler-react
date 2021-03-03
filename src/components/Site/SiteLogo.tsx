import * as React from "react";
import cn from "classnames";

export interface SiteLogoProps {
  className?: string;
  href?: string;
  src?: string;
  srcSmall?: string;
  alt?: string;
}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
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

export default SiteLogo;

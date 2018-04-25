// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +src: string,
  +alt?: string,
  +href?: string,
  +rounded?: boolean,
  +className?: string,
|};

function GalleryCardImage({ src, alt, href, rounded, className }: Props) {
  const aClasses = cn("mb-3");

  const imageClasses = cn(
    {
      rounded: rounded,
    },
    className
  );

  const aOptionalProps = {};

  if (href) {
    aOptionalProps.href = href;
  }

  return (
    <a className={aClasses} {...aOptionalProps}>
      <img src={src} alt={alt} className={imageClasses} />
    </a>
  );
}

export default GalleryCardImage;

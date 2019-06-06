import * as React from "react";
import cn from "classnames";

interface Props {
  src: string;
  alt?: string;
  href?: string;
  rounded?: boolean;
  className?: string;
  to?: string;
  RootComponent?: React.ElementType;
}

function GalleryCardImage({
  src,
  alt,
  href,
  rounded = true,
  className,
  to,
  RootComponent,
}: Props) {
  const componentClasses = cn("mb-3");

  const imageClasses = cn(
    {
      rounded: rounded,
    },
    className
  );

  const componentOptionalProps: Pick<Props, "href"> = { href: undefined };

  if (href) {
    componentOptionalProps.href = href;
  }

  const image = <img src={src} alt={alt} className={imageClasses} />;
  return RootComponent ? (
    <RootComponent className={componentClasses} to={to}>
      {image}
    </RootComponent>
  ) : (
    <a className={componentClasses} {...componentOptionalProps}>
      {image}
    </a>
  );
}

GalleryCardImage.displayName = "GalleryCard.Image";

/** @component */
export default GalleryCardImage;

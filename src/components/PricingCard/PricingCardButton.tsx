import * as React from "react";
import cn from "classnames";

// TODO: Add onClick Event Handler
// TODO : Add  color prop
type Props = {
  children?: React.ReactNode;
  className?: string;
  RootComponent?: React.ElementType;
  active?: boolean;
  href?: string;
  to?: string;
  onClick?: (event: React.MouseEvent) => any;
};

function PricingCardButton({
  className,
  children,
  RootComponent,
  active,
  href,
  to,
  onClick,
}: Props) {
  const classes = cn("text-center", "mt-6");
  const Component = RootComponent || "a";
  const componentClasses = cn(
    "btn",
    active ? "btn-green" : "btn-secondary",
    "btn-block",
    className
  );

  const otherProps: Pick<Props, "href" | "to" | "onClick"> & {
    role: string | undefined;
  } = {
    href: undefined,
    to: undefined,
    role: undefined,
    onClick: undefined,
  };

  if (href) {
    otherProps.href = href;
  }

  if (to) {
    otherProps.to = to;
  }

  if (onClick) {
    otherProps.role = "button";
    otherProps.onClick = onClick;
  }

  return (
    <div className={classes}>
      <Component className={componentClasses} {...otherProps}>
        {children}
      </Component>
    </div>
  );
}



export default PricingCardButton;

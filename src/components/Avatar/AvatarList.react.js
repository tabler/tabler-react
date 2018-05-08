// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * Renders the Avatars to look stacked by slightly overlapping each over
   */
  +stacked?: boolean,
|};

/**
 * Renders a group of Icons
 */
function AvatarList({ className, children, stacked }: Props): React.Node {
  const classes = cn(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

AvatarList.displayName = "Avatar.List";

export default AvatarList;

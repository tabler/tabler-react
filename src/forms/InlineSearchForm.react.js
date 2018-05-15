// @flow
import * as React from "react";
import cn from "classnames";
import { Icon } from "../";

type Props = {| +className?: string |};

function InlineSearchForm(props: Props): React.Node {
  const classes = cn("input-icon my-3 my-lg-0", props.className);
  return (
    <form className={classes}>
      <input
        type="search"
        className="form-control header-search"
        placeholder="Search&hellip;"
        tabIndex="1"
      />
      <div className="input-icon-addon">
        <Icon prefix="fe" name="search" />
      </div>
    </form>
  );
}

export default InlineSearchForm;

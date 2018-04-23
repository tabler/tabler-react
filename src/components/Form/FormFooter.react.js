// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormFooter(props: Props): React.Node {
  const classes = cn("form-footer", props.className);
  return <div className={classes}>{props.children}</div>;
}

FormFooter.displayName = "Form.Footer";

export default FormFooter;

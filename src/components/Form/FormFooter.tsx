import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormFooter(props: Props) {
  const classes = cn("form-footer", props.className);
  return <div className={classes}>{props.children}</div>;
}

FormFooter.displayName = "Form.Footer";

export default FormFooter;

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function TimelineItemDescription({ children }: Props) {
  return <small className="d-block text-muted">{children}</small>;
}



export default TimelineItemDescription;

// @flow

import * as React from "react";
import cn from "classnames";
import FormWithSingleInputAndButton from "../../forms/FormWithSingleInputAndButton.react";
import Card from "../Card";
import Comment from "../Comment";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CommentsCard({ className, children }: Props): React.Node {
  const classes = cn(className);
  return (
    <Card className={classes}>
      <Card.Header>
        <FormWithSingleInputAndButton
          inputProps={{ placeholder: "Message" }}
          buttonProps={{ icon: "camera", color: "secondary" }}
        />
        <Comment>{children}</Comment>
      </Card.Header>
    </Card>
  );
}

export default CommentsCard;

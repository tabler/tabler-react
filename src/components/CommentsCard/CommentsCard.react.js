// @flow

import * as React from "react";
import cn from "classnames";
import FormWithSingleInputAndButton from "../../forms/FormWithSingleInputAndButton.react";
import Card from "../Card/Card.react";
import Comments from "../Comments/Comments.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +comments?: React.Node,
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
        <Comments>{children}</Comments>
      </Card.Header>
    </Card>
  );
}

export default CommentsCard;

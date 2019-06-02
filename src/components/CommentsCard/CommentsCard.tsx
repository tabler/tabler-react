import * as React from "react";
import cn from "classnames";
import FormWithSingleInputAndButton from "../../forms/FormWithSingleInputAndButton.react";
import Card from "../Card";
import Comment from "../Comment";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CommentsCard({ className, children }: Props) {
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

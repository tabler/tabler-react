// @flow

import * as React from "react";
import Media from "../Media";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +avatarURL?: string,
  +name?: string,
  +date?: string,
  +text?: string,
|};

function CommentReply({
  className,
  children,
  avatarURL,
  name,
  date,
  text,
}: Props): React.Node {
  return (
    <Media.ListItem className={className}>
      <Media.Object avatar objectURL={avatarURL} className="mr-4" />
      <Media.Body>
        <strong>{name}: </strong>
        {text}
      </Media.Body>
    </Media.ListItem>
  );
}

export default CommentReply;

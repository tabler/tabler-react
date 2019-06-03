import * as React from "react";
import cn from "classnames";
import List from "../List";
import Media from "../Media/Media";
import Text from "../Text/Text.react";
import CommentList from "./CommentList";
import CommentReply from "./CommentReply";

interface Props {
  children?: React.ReactNode;
  className?: string;
  avatarURL?: string;
  name?: string;
  date?: string;
  text?: string;
  replies?: React.ReactNode;
}

function Comment({
  className,
  children,
  avatarURL,
  name,
  date,
  text,
  replies,
}: Props) {
  const classes = cn("py-5", className);

  return (
    <List.GroupItem className={classes}>
      <Media>
        <Media.Object avatar objectURL={avatarURL} size="md" className="mr-4" />
        <Media.Body>
          <Media.Heading>
            <small className="float-right text-muted">{date}</small>
            <h5>{name}</h5>
          </Media.Heading>
          <Text>{text}</Text>
          {replies && <Media.List>{replies}</Media.List>}
        </Media.Body>
      </Media>
    </List.GroupItem>
  );
}

Comment.List = CommentList;
Comment.Reply = CommentReply;

export default Comment;

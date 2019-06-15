import * as React from "react";
import Avatar from "../Avatar";
import Text from "../Text";

export interface Props {
  /**
   * The  avatar image URL
   */
  avatarURL?: string;
  /**
   * The message displayed within the Notification
   */
  message: React.ReactNode;
  /**
   * The time displayed within the Notification
   */
  time?: string;
  /**
   * Indicate the notification as unread
   */
  unread?: boolean;
}

/**
 * An individual Notification made up of an Avatar alongside some text and the time
 */
function Notification({ avatarURL, message, time, unread }: Props) {
  return (
    <React.Fragment>
      {avatarURL && (
        <Avatar className="mr-3 align-self-center" imageURL={avatarURL} />
      )}
      <div>
        {message}
        {time && (
          <Text color="gray" size="small">
            {time}
          </Text>
        )}
      </div>
    </React.Fragment>
  );
}

export default Notification;

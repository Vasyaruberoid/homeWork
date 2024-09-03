import React from "react";
import s from "./FriendMessage.module.css";

export type FriendMessage = {
  message: MessageType;
};

export type MessageType = {
  id: number;
};

const FriendMessage = ({ message }: FriendMessage) => {
  return (
    <div id={"hw1-friend-message-" + message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img id={"hw1-friend-avatar-" + message.id} />
        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + message.id}
            className={s.friendName}
          ></div>
          <pre
            id={"hw1-friend-text-" + message.id}
            className={s.friendMessageText}
          ></pre>
        </div>
      </div>
      <div id={"hw1-friend-time-" + message.id} className={s.friendTime}></div>
    </div>
  );
};

export default FriendMessage;

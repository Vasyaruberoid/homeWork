import React from "react";
import s from "./FriendMessage.module.css";
import { MessagePropsType } from "../HW1";

const FriendMessage = ({ message }: { message: MessagePropsType }) => {
  return (
    <div id={"hw1-friend-message-" + message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <div className={s.block}>
          <img id={"hw1-friend-avatar-" + message.id} src={message.user.avatar} alt="avatar" width='50' height='50'/>
          <div id={"hw1-friend-time-" + message.id} className={s.friendTime}>
            {message.message.time}
          </div>
        </div>

        <div className={s.friendText}>
          <div id={"hw1-friend-name - 1" + message.id} className={s.friendName}>
            {message.user.name}
          </div>
          <pre id={"hw1-friend-text-" + message.id} className={s.friendMessageText}>
            {message.message.text}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FriendMessage;

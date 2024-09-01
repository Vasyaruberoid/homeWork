import React from "react";
import s from "./Message.module.css";
import { MessageType } from "../friend-message/FriendMessage";

export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = ({ message }: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img id={"hw1-avatar-" + message.id} />
        <div className={s.text}>
          <div id={"hw1-name-" + message.id} className={s.name}></div>
          <pre id={"hw1-text-" + message.id} className={s.messageText}></pre>
        </div>
      </div>
      <div id={"hw1-time-" + message.id} className={s.time}></div>
    </div>
  );
};

export default Message;

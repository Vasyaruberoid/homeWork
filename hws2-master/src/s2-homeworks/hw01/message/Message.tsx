import React from "react";
import s from "./Message.module.css";
import { MessagePropsType } from "../HW1";

// нужно отобразить приходящие данные
const Message = ({ message }: { message: MessagePropsType }) => {
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <div className={s.text}>
          <div id={"hw1 -name-" + message.id} className={s.name}>
            {message.user.name}
          </div>
          <pre id={"hw1-text-" + message.id} className={s.messageText}>
            {message.message.text}
          </pre>
        </div>
        <div className={s.block}>
          <img id={"hw1-avatar-" + message.id} src={message.user.avatar} alt='avatar' width='50' height='50'/>
          <div id={"hw1-time-" + message.id} className={s.time}>
            {message.message.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

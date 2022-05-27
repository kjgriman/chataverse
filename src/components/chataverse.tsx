import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';
import 'react-chat-widget/lib/styles.css';
import { io } from "socket.io-client";


const ENDPOINT = "https://api-pm.dev.mytaverse.com/";

interface ChataverseProps {
  urlWSS:string,
  title?: string,
  launcher?: any,
  chatId?: string,
  emojis?: boolean,
  subtitle?: string,
  resizable?: boolean,
  showBadge?: boolean,
  autofocus?: boolean,
  titleAvatar?: string,
  profileAvatar?: string,
  fullScreenMode?: boolean,
  showCloseButton?: boolean,
  senderPlaceHolder?: string,
  profileClientAvatar?: string,
  handleQuickButtonClicked?: any,
}

// Delete me
export const ChataverseMain = (props: ChataverseProps) => {
  const urlWss = props.urlWSS ? props.urlWSS : ENDPOINT;
  useEffect(() => {
    console.log('xxxxxxxxxxxxxxxxxxxChataverse')
    const socket = io(urlWss,{
      transports: ["websocket"],
      multiplex: true,
      upgrade: false,
      reconnection: true,
      autoConnect: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 500,
      agent: false,
      rejectUnauthorized: false
    });
    console.log('socket',socket)
    // window.player = socket;

    socket.on("connect", () => {
      console.log('wss connect',socket.id); // x8WIv7-mJelg7on_ALbx
      socket.on("GlobalMessage_UE", data => {
        console.log('data wss2 connect chataverse', data)
      });

      socket.emit('GlobalMessage_WS', `${new Date().toJSON()}: kerbinxxxxxx is here!`);

      const userData = {
        "UserEventID": "channelXXX",
        "firstname": "kerbin Dev jose",
        "lastname": "griman marcano",
        "organization": "sweetcherry tech",
        "linkedin_account": "",
        "share_personal_info": true,
        "ready_for_event": false,
        "nickname": "kerbingriman",
        "email": "kerbin@mytaverse.com",
        "phone": "+584241715483",
        "country": "DZ",
        "profile_pic_url": "https://assets.prod.mytaverse.com/images/users/profile-kerbingriman-456-1151507266.jpg?ver=308510531",
        "chat_pic_url": "https://assets.prod.mytaverse.com/images/users/profile-kerbingriman-456-1801317116-64x64.jpg?ver=1192408915",
        "created_at": "2020-10-28 17:11:29",
        "email_verified_at": "2020-10-29 12:47:58",
        "status": "active",
        "user_timezone_gmtvar": "-4",
        "user_timezone_dst": "0",
        "user_id": "456",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiM2RhMzVhMmI4MTg0NjI1ZjgyYTI1MTlhMDMwYTczNjhjNGFkMjNjMmZhMTNhOWZmMzZhNjMxOTIxZGQwNDQ0ZDVmMzJmNjMyYzEzNDRlMzIiLCJpYXQiOjE2MzEyODUwNzgsIm5iZiI6MTYzMTI4NTA3OCwiZXhwIjoxNjYyODIxMDc4LCJzdWIiOiI0NTYiLCJzY29wZXMiOltdfQ.fzChbDZhF-4YbtAQ7z_Qyg6yfAreNZSAggYiyQUZYO_Ol3uPA23oR4LJMtoOQBNEhmsu90haqh4k0yf2O5NJrckU5y0DOs6JDQk6OZsFib2NX9TLUx8EZ8jxCHExUVEqCMfV0mS6fs7uthiCgzca6KH8xpLMp0-Qv_RkaorGZUSHYQQZo-oSU0hfjByR9LNrVZ8uqTxK13qXp2tZffaP2ZpNAhVOVMkTgziiKbiWXEDSJ638MK1ywU-Z9bXEsyT5VbkhprXIEeg1BU7SSf7DmOZQLcQNPKaGNrDAJHlUe4UDkw6RcACa6Rqf3lmZqp7z5V-_-QNhCCZpYcDN1t26ch2dtp2eRFDIcBk6NfB5GZ0_-aN8AH3wo0sz23alAzrpN3Iz5IHBggycmVTxX37mks-1jQ3C5d2AKidqKy_EoD2rSd90HKUuXmM1rKfRC82XYWm07BwrE0X7epM6Eh7Ah7ZhP7RwR5AC2t-yYnGlqeSEl1awgk8-uQA8NxcacoKKvzt_SK0g2LYPEa4A3QIQ2zfIVLe6vqZKpMyjZBRntBRkgIAR2P0-h0PqL8_522tlTkPG8QGVkNm2-2zWGpMrTqwzJ8SJfm2r4qy7FbL6NAK2WIBlMYojre-WEer3sK_QEHZ701bzVtOcoK7raJgde2BEr7aaqd5KZ7G-hFEfE1k",
        "user_remember": null,
    }
      socket.emit('AddNewUser_WS', userData);
    });
  }, []);

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    
        <Widget
          {...props}
          handleNewUserMessage={handleNewUserMessage}
        />
  );
};

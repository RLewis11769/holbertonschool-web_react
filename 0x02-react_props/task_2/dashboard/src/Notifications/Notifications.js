import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem
          type='urgent'
          html={{ __html: getLatestNotification() }}
        />
      </ul>
      <button
        aria-label='Close'
        onClick={() => console.log("Close button has been clicked")}
        style={{
          border: 0,
          background: "white",
          position: "absolute",
          right: 75,
          top: 75,
        }}
      >
        <img
          src={closeIcon}
          border='0'
          height='15px'
          width='15px'
          alt='Close'
        ></img>
      </button>
    </div>
  );
}

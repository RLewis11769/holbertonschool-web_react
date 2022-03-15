import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default function Notifications({ displayDrawer }) {
  return (
    <div id='Notif'>
      <div className='menuItem'>Your Notifications</div>
      {displayDrawer && (
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
              background: "transparent",
              position: "absolute",
              right: 25,
              top: 50,
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
      )}
    </div>
  );
}

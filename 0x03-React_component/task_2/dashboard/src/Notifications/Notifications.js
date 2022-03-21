import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { render } from 'enzyme';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  // Methods, variables, and rendering of Notifications class component

  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div id="Notif">
        <div className="menuItem">Your Notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            {listNotifications.length ? <p>Here is the list of notifications</p>
              : <p>No new notification for now</p>}
            {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type ? notif.type : 'default'}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}
            <button
              type="button"
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
              style={{
                border: 0,
                background: 'transparent',
                position: 'absolute',
                right: 25,
                top: 50,
              }}
            >
              <img
                src={closeIcon}
                border="0"
                height="15px"
                width="15px"
                alt="Close"
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

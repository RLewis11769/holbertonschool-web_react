import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  Notif: {
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    marginRight: '1rem',
  },
  menuItem: {
    alignSelf: 'flex-end',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  notifs: {
    border: '1px red dashed',
    padding: '1rem 7rem 2rem 2rem',
  },
  smallSize: {
    fontSize: '1rem',
  },
  closeBtn: {
    border: 0,
    background: 'transparent',
    position: 'absolute',
    right: 45,
    top: 65,
  },
  closeImg: {
    border: 0,
    height: 15,
    width: 15,
  },
});

class Notifications extends Component {
  // Methods, variables, and rendering of Notifications class component

  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.Notif)}>
        <div className={css(styles.menuItem)} id="menuItem">Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifs)} id="Notifs">
            {listNotifications.length
              ? <p className={css(styles.smallSize)}>Here is the list of notifications</p>
              : <p className={css(styles.smallSize)}>No new notification for now</p>}
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
              className={css(styles.closeBtn)}
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt="Close"
                className={css(styles.closeImg)}
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

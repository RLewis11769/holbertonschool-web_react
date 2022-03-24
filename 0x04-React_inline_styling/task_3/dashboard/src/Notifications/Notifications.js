import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  Notif: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    // width: props.clicked ? '100vh' : 'auto',
    // height: props.clicked ? '100vh' : 'auto',
    '@media (min-width: 900px)': {
      marginRight: '1rem',
      float: 'right',
    },
  },
  menuItem: {
    marginBottom: '1rem',
    zIndex: '1',
    '@media (min-width: 900px)': {
      textAlign: 'right',
    },
  },
  notifList: {
    listStyle: 'none',
    fontSize: 20,
    zIndex: '1',
    '@media (min-width: 900px)': {
      border: '1px red dashed',
      padding: '1rem 7rem 2rem 2rem',
    },
  },
  closeBtn: {
    border: 0,
    position: 'absolute',
    right: 20,
    top: 20,
    '@media (min-width: 900px)': {
      right: 45,
      top: 65,
    },
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
          <div className={css(styles.notifList)} id="Notifs">
            {listNotifications.length
              ? <p>Here is the list of notifications</p>
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
              className={css(styles.closeBtn)}
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt="Close"
                width="15px"
                height="15px"
                border="0"
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

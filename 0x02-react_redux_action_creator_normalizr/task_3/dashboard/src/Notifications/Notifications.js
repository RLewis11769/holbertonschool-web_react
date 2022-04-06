import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

// Defintion of animation
const opacityKeyframes = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

// Definition of styles
const styles = StyleSheet.create({
  Notif: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    // width: props.displayDrawer ? '100vh' : 'auto',
    // height: props.displayDrawer ? '100vh' : 'auto',
    '@media (min-width: 900px)': {
      marginRight: '1rem',
    },
  },
  menuItem: {
    marginBottom: '1rem',
    backgroundColor: '#fff8f8',
    zIndex: '1',
    float: 'right',
    '@media (min-width: 900px)': {
      textAlign: 'right',
    },
    ':hover': {
      pointer: 'cursor',
      // Only works when not using styles.animation also?
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationName: [opacityKeyframes, bounceKeyframes],
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
  padding: {
    paddingBottom: '100vh',
  },
  button: {
    position: 'absolute',
    border: 'none',
    background: 'none',
  },
  animation: {
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
    animationName: [opacityKeyframes, bounceKeyframes],
  },
});

class Notifications extends PureComponent {
  // Methods, variables, and rendering of Notifications class component

  render() {
    const {
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      listNotifications,
      markNotificationAsRead,
    } = this.props;

    return (
      <div className={css(styles.Notif)}>
        {!displayDrawer ? (
          <div className={css(styles.menuItem, styles.animation)}>
            <button
              type="button"
              id="menuItem"
              className={css(styles.button)}
              style={{ fontSize: '1rem', right: '0.5rem' }}
              onClick={() => handleDisplayDrawer()}
            >
              Your Notifications
            </button>
          </div>
        ) : (
          <>
            <div id="Notifs" className={css(styles.notifList)}>
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
                    markNotificationAsRead={() => markNotificationAsRead(notif.id)}
                  />
                ))
              ) : (
                <tr>No course available yet</tr>
              )}
              <button
                type="button"
                id="closeBtn"
                aria-label="Close"
                className={css(styles.button)}
                style={{
                  top: '2.5rem',
                  right: '2.5rem',
                }}
                onClick={() => handleHideDrawer()}
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
            <div className={css(styles.padding)} />
          </>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  listNotifications: [],
  markNotificationAsRead: () => { },
};

export default Notifications;

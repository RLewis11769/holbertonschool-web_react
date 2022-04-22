import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import { AppContext } from './AppContext';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from '../actions/uiActionCreators';

// Definition of styles
const styles = StyleSheet.create({
  body: {
    fontFamily: 'Verdana',
    margin: '0.5rem',
    scrollBehavior: 'smooth',
  },
  mainContent: {
    borderTop: '3px #e11d3f solid',
  },
  footer: {
    borderTop: '3px #e11d3f solid',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

class App extends Component {
  // Methods, variables, and rendering of App class component
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
    // Bind class methods to component
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  // Invoked when component is initially mounted (added to DOM)
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Invoked just before component is unmounted/removed from DOM
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    // Invoked when user presses ctrl-h
    if (e.ctrlKey && e.key === 'h') {
      // e.preventDefault();
      alert('Logging you out');
      this.state.isUserLoggedIn = false;
    }
  };

  markNotificationAsRead(id) {
    // Update state to remove notification with id
    const { listNotifications } = this.state;
    this.setState({
      listNotifications: listNotifications.filter(
        (notif) => notif.id !== id,
      ),
    });
  }

  render() {
    // state, props, variables, functions, and rendering of App component
    const { listNotifications } = this.state;
    const {
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      isLoggedIn,
      login,
    } = this.props;

    // Course list to be shown in CourseListRow component
    const listCourses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];

    // Actual rendering of App component
    return (
      <AppContext.Provider value={this.state}>
        <div className={css(styles.body)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <main className={css(styles.mainContent)}>
            {/* Either renders CourseList or Login component based on isLoggedIn prop */}
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
            )}
            {/* Temp section */}
            <BodySection title="News from the School">
              <p>some random text</p>
            </BodySection>
          </main>
          <footer className={css(styles.footer)}>
            <Footer />
          </footer>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

export function mapStateToProps(state) {
  // Connect App component's isLoggedIn with redux state
  return {
    // isLoggedIn: state.toJS().isUserLoggedIn,
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.toJS().isNotificationDrawerVisible,
    login: loginRequest,
  };
}

// Connect component to action creators
function mapDispatchToProps(dispatch) {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    // login: (...args) => dispatch(loginRequest(...args)),
  };
}

// Connect redux state to App component
connect(mapStateToProps, mapDispatchToProps)(App);

export default App;

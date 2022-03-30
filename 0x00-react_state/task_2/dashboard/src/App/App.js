import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import { defaultUser, AppContext } from './AppContext';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

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
      displayDrawer: false,
      user: defaultUser,
      // Using state in other components but not App
      // eslint-disable-next-line react/no-unused-state
      logOut: () => this.logOut(),
    };
    // Bind class methods to component
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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
      this.logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  logIn(email, password) {
    // Update state
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
    this.handleDisplayDrawer();
  }

  logOut() {
    // Update state
    this.setState({
      user: defaultUser,
    });
    this.handleHideDrawer();
  }

  render() {
    // state, props, variables, functions, and rendering of App component
    const { displayDrawer } = this.state;
    const { user } = this.state;

    // Course list to be shown in CourseListRow component
    const listCourses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];

    // Notification list to be shown in Notifications component
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    // Actual rendering of App component
    return (
      <AppContext.Provider value={this.state}>
        <div className={css(styles.body)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <main className={css(styles.mainContent)}>
            {/* Either renders CourseList or Login component based on isLoggedIn prop */}
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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

export default App;

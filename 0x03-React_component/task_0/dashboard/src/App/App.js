import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class App extends PureComponent {
  render() {
    // state, variables, functions, and rendering of App component
    const { isLoggedIn } = this.props;

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
      <>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <main className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </main>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

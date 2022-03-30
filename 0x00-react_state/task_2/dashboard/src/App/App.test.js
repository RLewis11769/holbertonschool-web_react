import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';
import App from './App';

describe('App component', () => {
  // Tests for App component in App.js

  // If Jest has mocked something, remove it so doesn't affect other tests
  // I haven't noticed this making a difference, but just in case
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // Components mount by default
  it('Verifies that App component renders without crashing', () => {
    shallow(<App />);
  });

  test('Notifications component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('Header component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('Footer component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  // Login vs CourseList components load (props)
  it('Verifies login component exists by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('Verifies CourseList component exists after login', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: 'email@email.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    expect(wrapper.exists('CourseList')).toBe(true);
    expect(wrapper.exists('Login')).toBe(false);
  });

  // ctrl-h KeyDown event handlers on componentDidMount
  it('Verifies alert called when ctrl-h pressed', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<App isLoggedIn />);
    const event = {
      ctrlKey: true,
      key: 'h',
    };
    wrapper.instance().handleKeyDown(event);
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  // displayDrawer state tests
  it('Verifies that displayDrawer state is false by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Verifies that displayDrawer state is true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('Verifies that displayDrawer state is false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  // logIn/logOut state tests
  it('Verifies that user state is defaultUser by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('Verifies that user state is updated when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('email@email.com', 'password');
    expect(wrapper.state('user')).toEqual({
      email: 'email@email.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('Verifies that user state is updated when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: 'email@email.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('Verifies that AppContext works correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={defaultUser}>
        <App />
      </AppContext.Provider>,
    );
    expect(wrapper.state().user).toEqual(defaultUser);
  });

  it('Verifies that AppContext works correctly with logIn', () => {
    const wrapper = mount(
      <AppContext.Provider value={defaultUser}>
        <App />
      </AppContext.Provider>,
    );
    wrapper.instance().logIn('email@email.com', 'password');
    expect(wrapper.state().user).toEqual({
      email: 'email@email.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('Verifies that AppContext works correctly with logOut', () => {
    const wrapper = mount(
      <AppContext.Provider value={defaultUser}>
        <App />
      </AppContext.Provider>,
    );
    wrapper.setState({
      user: {
        email: 'email@email.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(defaultUser);
  });
});

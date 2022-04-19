import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { AppContext, defaultUser } from './AppContext';
import App, { mapStateToProps } from './App';

const testUser = {
  email: 'email@email.com',
  password: 'password',
  isLoggedIn: true,
};

const listNotifications = [
  { id: 1, type: 'urgent', value: 'Value 1' },
  { id: 2, type: 'default', html: { __html: 'HTML 1' } },
];

describe('Basic component rendering - components mount by default', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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
});

describe('Login vs CourseList components load - based on state isLoggedIn', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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
});

describe('ctrl-h KeyDown event handlers on componentDidMount - using spy', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // If Jest has mocked something, remove it so doesn't affect other tests
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
});

describe('displayDrawer rendering - based on displayDrawer state', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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
});

describe('logIn/logOut rendering - used with calling OR mounting AppContext.Provider', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that user state is defaultUser by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('Verifies that user state is updated when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('email@email.com', 'password');
    expect(wrapper.state('user')).toEqual(testUser);
  });

  it('Verifies that user state is updated when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState(testUser);
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
    expect(wrapper.state().user).toEqual(testUser);
  });

  it('Verifies that AppContext works correctly with logOut', () => {
    const wrapper = mount(
      <AppContext.Provider value={defaultUser}>
        <App />
      </AppContext.Provider>,
    );
    wrapper.setState(testUser);
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(defaultUser);
  });
});

describe('markNotificationAsRead tests - based on state', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that markNotificationAsRead state is set', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ listNotifications });
    expect(wrapper.state('listNotifications')).toHaveLength(2);
  });

  it('Verifies that markNotificationAsRead removes notifications when clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ listNotifications });
    wrapper.instance().markNotificationAsRead(listNotifications[0].id);
    expect(wrapper.state('listNotifications')).toHaveLength(1);
    expect(wrapper.state('listNotifications')).not.toContain(listNotifications[0]);
  });
});

describe('mapStateToProps tests - based on Redux uiReducer', () => {
  // Before each test, make sure Aphrodite doesn't throw an error
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that state isUserLoggedIn returns isLoggedIn', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});

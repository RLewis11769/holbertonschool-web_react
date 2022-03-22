import React from 'react';
// import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';

describe('WithLogging HOC component', () => {
  // Tests for WithLogging component

  it('Verifies that console.log called on mount', () => {
    const spy = jest.spyOn(console, 'log');
    const component = () => <p />;
    const WrappedComponent = WithLogging(component);
    render(<WrappedComponent />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, `Component ${component} is mounted`);
    spy.mockRestore();
  });

  it('Verifies that console.log called on unmount', () => {
    const spy = jest.spyOn(console, 'log');
    const component = () => <div />;
    const WrappedComponent = WithLogging(component);
    const { unmount } = render(<WrappedComponent />);
    unmount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, `Component ${component} is mounted`);
    expect(spy).toHaveBeenNthCalledWith(2, `Component ${component} is going to unmount`);
    spy.mockRestore();
  });
});

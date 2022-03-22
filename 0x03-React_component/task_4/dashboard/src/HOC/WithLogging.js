import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function WithLogging(WrappedComponent) {
  class InnerWithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent} is going to unmount`);
    }

    render() {
      return <WrappedComponent />;
    }
  }

  InnerWithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
  return InnerWithLogging;
}

export default WithLogging;

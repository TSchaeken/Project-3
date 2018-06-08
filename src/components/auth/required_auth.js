import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function requireAuth(WrappedComponent) {
  class Authentication extends Component {
    render() {
      const { auth } = this.props;

      if (!auth) {
        return <Redirect to="/user/login" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ authenticated }) {
    return { auth: authenticated.status };
  }

  return connect(mapStateToProps)(Authentication);
}

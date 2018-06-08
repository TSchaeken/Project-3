import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../actions/';

class NavBar extends Component {
  LogOut() {
    const { user } = this.props;
    this.props.LogOut(user);
  }

  render() {
    const { auth } = this.props;

    if (!auth) {
      return (
        <div className="nav-top navbar is-link level">
          <div className="buttons has-addons level-left">
            <Link to="/" className="button navbar-item is-large btncolor">
              Home
            </Link>
            <Link to="/user" className="button navbar-item is-large btncolor">
              User
            </Link>
            <Link to="/user/login" className="button navbar-item is-large btncolor">
              Log in
            </Link>
            <Link to="/signup" className="button navbar-item is-large btncolor">
              Sign Up
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="nav-top navbar is-link level">
        <div className="buttons has-addons level-left">
          <Link to="/" className="button navbar-item is-large btncolor">
            Home
          </Link>
          <Link to="/user" className="button navbar-item is-large btncolor">
            User
          </Link>
          <button className="button navbar-item is-large btncolor" onClick={this.LogOut.bind(this)}>
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authenticated, users }) {
  return {
    auth: authenticated.status,
    user: users.data
  };
}

export default connect(
  mapStateToProps,
  { LogOut }
)(NavBar);

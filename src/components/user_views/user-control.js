import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserControl extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3>User Control</h3>
        </div>
        <Link to="/user/userdata" className="btn">
          Add/Update profile information
        </Link>
        <Link to="/user/search" className="btn">
          Search Users
        </Link>
      </div>
    );
  }
}

export default UserControl;

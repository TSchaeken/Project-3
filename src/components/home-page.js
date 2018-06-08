import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <div className="level">
          <div className="level-item has-text-centered">
            <h1 class="title">Quota</h1>
            
          </div>
        </div>
      );
    }
    console.log('hey');
    console.log(user);
    return (
      <div>
        <span>{user.username}</span>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { user: users.data };
}

export default connect(
  mapStateToProps,
  null
)(HomePage);

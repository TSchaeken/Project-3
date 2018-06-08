import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { logIn } from '../actions';

class SignIn extends Component {
  state = {
    toUser: false
  };
  enterField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }
  onSubmit = values => {
    this.props.logIn(values);
    this.setState({ toUser: true });
  };

  render() {
    if (this.setState.toDashboard === true) {
      return <Redirect to="/user" />;
    }
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Username" name="username" type="text" component={this.enterField} />
        <Field label="Password" name="password" type="password" component={this.enterField} />
        <button type="submit" className="button">
          Submit
        </button>
        <Link to="/" className="button">
          Return
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Enter a username!';
  }

  if (!values.password) {
    errors.password = "Don't forget your password!";
  }

  return errors;
}

export default reduxForm({ validate, form: 'SignUpForm' })(
  connect(
    null,
    { logIn }
  )(SignIn)
);

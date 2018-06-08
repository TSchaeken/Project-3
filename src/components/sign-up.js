import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signUp } from '../actions/';

class SignUp extends Component {
  enterField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.signUp(values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Username" name="username" component={this.enterField} />
        <Field label="Password" name="password" component={this.enterField} />
        <button type="submit" className="button">
          Submit
        </button>
        <Link to="/user" className="button">
          Return
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.title = 'Enter a username!';
  }

  if (!values.password) {
    errors.categories = "Don't forget your password!";
  }

  return errors;
}

export default reduxForm({ validate, form: 'LogInAttempt' })(
  connect(
    null,
    { signUp }
  )(SignUp)
);

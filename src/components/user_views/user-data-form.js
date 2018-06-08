import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../../actions/';
import _ from 'lodash';

class SignUpForm extends Component {
  enterField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    const _id = { id: this.props.user.id };
    const data = _.assign(values, _id);
    this.props.createUser(data);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Name" name="name" component={this.enterField} />
        <Field label="Occupation" name="occupation" component={this.enterField} />
        <Field label="Experience" name="experience" component={this.enterField} />
        <Field label="Description" name="description" component={this.enterField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/user" className="btn btn-primary">
          Return
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.title = 'Enter a user name!';
  }

  if (!values.occupation) {
    errors.categories = 'Enter some categories';
  }

  if (!values.experience) {
    errors.content = 'Enter some content please';
  }

  if (!values.description) {
    errors.content = 'Enter some content please';
  }

  return errors;
}

function mapStateToProps({ users }) {
  return {
    user: users.data
  };
}

export default reduxForm({
  validate,
  form: 'UserUpdatingInformation'
})(
  connect(
    mapStateToProps,
    { createUser }
  )(SignUpForm)
);

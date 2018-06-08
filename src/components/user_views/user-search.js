import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import DropDownSelect from './drop-down';
import UserList from './user-components/user-list';
import UserDetail from './user-components/user-detail';

class SearchView extends Component {
  enterField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.Search(values);
  }

  render() {
    const { results } = this.props;

    if (!results) {
      const { handleSubmit } = this.props;
      return (
        <button>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="field">
              <div class="control">
                <Field label="Occupation" name="occupation" component={this.enterField} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/user" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </button>
      );
    }

    return (
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    results: search.data
  };
}
export default reduxForm({
  form: 'SearchForm'
})(
  connect(
    mapStateToProps,
    { Search }
  )(SearchView)
);

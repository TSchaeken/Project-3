import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectPerson } from '../../../actions';
import { bindActionCreators } from 'redux';

class PeopleList extends Component {
  renderList() {
    return this.props.search.map(person => {
      return (
        <li
          onClick={() => this.props.SelectPerson(person)}
          className="list-group-item"
          key={person._id}
        >
          {person.name}
        </li>
      );
    });
  }

  render() {
    const { search } = this.props;
    if (!search) {
      return <div>waiting on results</div>;
    }
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps({ search }) {
  return { search: search.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SelectPerson: SelectPerson }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonDetail extends Component {
  render() {
    const { select } = this.props;

    if (!select) {
      return <div>Select a person to see their details!</div>;
    }
    return (
      <div>
        <div className="level">
          <h3 className="level">Details for: {select.name}</h3>
        </div>
        <div>
          <div className="level">
            {select.name} works as a {select.occupation}
          </div>
        </div>
        <div>
          <div className="level">
            {select.name} brings {select.experience} years of experience
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ select }) {
  return { select };
}

export default connect(mapStateToProps)(PersonDetail);

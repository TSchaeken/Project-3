// import React from 'react';

// class DropDownSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function

//   renderSelectOptions = (person) => (
//     <option key={person} value={person}>{person}</option>
//   )

//   render() {
//     const { input, label } = this.props;
//     return (
//       <div>
//         {/* <label htmlFor={label}>{label}</label> */}
//         <select {...input}>
//           <option value="">Select</option>
//           {this.props.people.map(this.renderSelectOptions)}
//         </select>
//       </div>
//     );
//   }
// }


// <div className="form-group">
//           <label htmlFor="dropDownSelect">Select an Option</label>
//           <Field
//             name="dropDownSelect"
//             // component="select"
//             label="dropDownSelect"
//             component={DropDownSelect}
//             people={interest}
//             className="form-control"
//           >
//             {/* {people.map(DropDownSelect)} */}
//           </Field>
//         </div>

// export default DropDownSelect;
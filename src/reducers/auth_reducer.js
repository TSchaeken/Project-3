import { LOGIN_ATTEMPT, LOG_OUT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case `${LOGIN_ATTEMPT}_PENDING`:
      return state;
    case `${LOGIN_ATTEMPT}_FULFILLED`:
      return {
        status: true
      };
    case `${LOGIN_ATTEMPT}_REJECTED`:
      return {
        isRejected: false,
        error: action.payload
      };
    case `${LOG_OUT}_PENDING`:
      return state;
    case `${LOG_OUT}_FULFILLED`:
      return {
        status: false
      };
    case `${LOG_OUT}_REJECTED`:
      return {
        isRejected: false,
        error: action.payload
      };
    default:
      return state;
  }
}

import { LOGIN_ATTEMPT, LOG_OUT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case `${LOGIN_ATTEMPT}_PENDING`:
      return state;
    case `${LOGIN_ATTEMPT}_FULFILLED`:
      return action.payload;
    case `${LOGIN_ATTEMPT}_REJECTED`:
      return {
        isRejected: false,
        error: action.payload
      };
    case `${LOG_OUT}_FULFILLED`:
      return {};
    default:
      return state;
  }
}

import { SEARCH } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case `${SEARCH}_PENDING`:
      return state;
    case `${SEARCH}_FULFILLED`:
      return action.payload;
    case `${SEARCH}_REJECTED`:
      return {
        isRejected: false,
        error: action.payload
      };
    default:
      return state;
  }
}

import { PERSON_SELECT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case PERSON_SELECT:
      return action.payload;
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './user_reducer';
import AuthReducer from './auth_reducer';
import SearchReducer from './search_reducer';
import SelectReducer from './select_reducer';

const rootReducer = combineReducers({
  users: UserReducer,
  authenticated: AuthReducer,
  form: formReducer,
  search: SearchReducer,
  select: SelectReducer
});

export default rootReducer;

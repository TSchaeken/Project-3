import axios from 'axios';

export const CREATE_USER_DATA = 'create_user_data';
export const LOGIN_ATTEMPT = 'login_attempt';
export const SIGN_UP = 'sign_up';
export const LOG_OUT = 'log_out';
export const SEARCH = 'search';
export const PERSON_SELECT = 'person_select';

const URL = 'http://localhost:8080';

export function createUser(values) {
  const request = axios.post(`${URL}/api/user`, values);
  return {
    type: CREATE_USER_DATA,
    payload: request
  };
}

export function logIn(values) {
  const request = axios.post(`${URL}/user/login`, values);
  return {
    type: LOGIN_ATTEMPT,
    payload: request
  };
}

export function signUp(values, callback) {
  console.log('HERE:', values);
  const request = axios.post(`${URL}/user`, values).then(res => {
    callback();
  });
  return {
    type: SIGN_UP,
    payload: request
  };
}

export function LogOut(values) {
  const request = axios.post(`${URL}/user/logout`, values);
  return {
    type: LOG_OUT,
    payload: request
  };
}

export function Search(values) {
  const request = axios.post(`${URL}/api/search`, values);
  return {
    type: SEARCH,
    payload: request
  };
}

export function SelectPerson(person) {
  console.log(person);
  return {
    type: PERSON_SELECT,
    payload: person
  };
}

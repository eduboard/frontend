import { Store } from './Store';
import router from '../router';

const authUrl = 'https://eduboard.io/api';
const apiUrl = 'https://eduboard.io/api/v1';

const endpoints = {
  courses: ctx => `/users/${ctx.userId}/courses`,
  allCourses: () => '/courses',
  users: () => '/users'
};

const auth = {};

/**
 * Login or Register, based on action.
 * Redirects to dashboad on success
 */
auth.auth = function (action, params) {
  console.log(`Called ${action}`);
  this.request('POST', `${authUrl}/${action}`, (res) => {
    if (res.success !== false) {
      res.getterName = 'user';
      Store.commit('set', res);
      router.push('/dashboard');
      this.get('courses');
      this.get('allCourses');
    }
  }, params);
};

/**
 * Logs out the user and redirects to landing page.
 */
auth.logout = function () {
  console.log('Called logout');
  this.request('POST', `${authUrl}/logout`, () => {
    console.log('Logout successful');
    router.push('/landing');
    Store.commit('set', {
      getterName: 'user'
    });
    document.cookie = 'sessionID=deleted; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  });
};

/**
 * Checks if the user is logged in and populates user state.
 * Failure to fetch user will redirect to the login page,
 * if the URL is neither imprint nor landing
 */
auth.getSelf = function (callback = null) {
  console.log('Called getUser');
  const userExisted = Boolean(Store.state.user.mail);
  this.request('GET', `${apiUrl}/me`, (res) => {
    if (res.success !== false) {
      res.getterName = 'user';
      Store.commit('set', res);
      if (!userExisted) {
        this.get('courses');
        this.get('allCourses');
      }
      if (callback) callback(true);
    } else if (callback) {
      callback(false);
    }
  });
};

/**
 * Updates the local state with the remote state via GET response.
 * Will inject dynamic data with evil.
 */
auth.get = function (name) {
  console.log(`Called GET ${name}`);
  const context = {
    userId: Store.state.user.id
  };
  const endpoint = `${apiUrl}${endpoints[name](context)}`;
  this.request('GET', endpoint, (res) => {
    if (res.success !== false) {
      res.getterName = name;
      Store.commit('set', res);
    } else {
      // TODO display failed message
      console.log(`Failed getting ${name}`);
    }
  });
};

/*
 * Request wrapper. Takes a callback and passes JSON response to it.
 * Catched non-JSON responses. Handling of success/failure is left to the callback.
 *
 * 401 responses will log the user out and redirect to login screen.
 * TODO 500 responses will display a message to the client.
 */
auth.request = function (method, url, callback, body) {
  const req = new XMLHttpRequest();
  req.withCredentials = true;
  req.onreadystatechange = function onResponse() {

    // Once the request is finished
    if (this.readyState === 4) {

      // If it successful and a JSON response
      if (this.status === 200 && this.responseText[0] === '{'
        || this.responseText[0] === '[') {
        callback(JSON.parse(this.responseText));

      // If Unauthorized (401) redirect to login
      } else if (this.status === 401 || this.status === 403) {
        Store.commit('set', { getterName: 'user' });
        router.push('/login');

      // If Server Fault (500) display error
      } else if (this.status === 500) {
        // TODO Display warning message to client
        console.log('Server error');

      // Else if failed otherwise
      } else {
        callback({
          success: false,
          status: this.status,
          msg: this.responseText,
        });
      }
    }
  };
  req.open(method, url, true);
  if (typeof body !== 'undefined') {
    req.setRequestHeader('Content-Type', 'application/json');
  }
  req.send(JSON.stringify(body));
};

export default auth;

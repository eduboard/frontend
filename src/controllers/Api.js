import { Store } from './Store';
import router from '../router';

const authUrl = 'https://eduboard.io/api';
const apiUrl = 'https://eduboard.io/api/v1';

const auth = {};

/**
 * Login or Register, based on action.
 * Redirects to dashboad on success
 */
auth.auth = function (action, params) {
  console.log(`Called ${action}`);
  this.request('POST', `${authUrl}/${action}`, (res) => {
    if (res.success !== false) {
      console.log(res);
      Store.commit('user', res);
      router.push('/dashboard');
      this.getCourses();
      this.getAllCourses();
    }
  }, params);
};

/**
 * Logs out the user and redirects to landing page.
 */
auth.logout = function () {
  console.log('Called logout');
  this.request('POST', `${authUrl}/logout`, (res) => {
    if (res.success !== false) {
      console.log('Logout successful');
      router.push('/');
    }
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
  this.request('GET', `${apiUrl}/me/`, (res) => {
    if (res.success !== false) {
      Store.commit('user', res);
      if (!userExisted) {
        this.getCourses();
        this.getAllCourses();
      }
      if (callback) callback(true);
    } else if (callback) {
      callback(false);
    }
  });
};

/**
 * Gets the full list of courses pertaining to the user,
 * that is used to populate the dashboard and the course views.
 * Will be fetched on first dashboard entry.
 */
auth.getCourses = function () {
  console.log('Called getcourses');
  const userId = Store.state.user.id;
  this.request('GET', `${apiUrl}/users/${userId}/courses/`, (res) => {
    if (res.success !== false) {
      Store.commit('courses', res);
    }
  });
};

/**
 * Gets all publicly available courses from the server,
 * as a list of title, description and time period.
 */
auth.getAllCourses = function () {
  console.log('Called getAllCourses');
  this.request('GET', `${apiUrl}/courses/`, (res) => {
    if (res.success !== false) {
      Store.commit('allCourses', res);
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
        Store.commit('user', {});
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

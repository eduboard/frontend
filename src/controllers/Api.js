import Store from './Store';

const authUrl = 'https://eduboard.io/api/';
const apiUrl = 'https://eduboard.io/api/v1/';

const auth = {};

/**
 * Login or Register, based on action.
 * Redirects to dashboad on success
 */
auth.auth = function (action, params) {
  console.log(`Called ${action}`);
  this.request('POST', `${authUrl}${action}`, (res) => {
    if (res.success !== false) {
      console.log(res);
      Store.commit('user', res);
      this.$router.push('/dashboard');
    }
  }, params);
};

/**
 * Logs out the user and redirects to landing page.
 */
auth.logout = function () {
  console.log('Called logout');
  this.request('POST', `${authUrl}logout`, (res) => {
    if (res.success !== false) {
      console.log('Logout successful');
      this.$router.push('/');
    }
  });
};

/**
 * Checks if the user is logged in and populates user state.
 * Failure to fetch user will redirect to the login page,
 * if the URL is neither imprint nor landing
 */
auth.getSelf = function () {
  console.log('Called getUser');
  const userExisted = !!Store.state.user.mail;
  this.request('GET', `${apiUrl}/me`, (res) => {
    if (res.success !== false) {
      Store.commit('user', res);
      if (!userExisted) {
        this.getCourses();
        this.getAllCourses();
      }
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
    Store.commit('user', res);
  });
};

/**
 * Gets all publicly available courses from the server,
 * as a list of title, description and time period.
 */
auth.getAllCourses = function () {
  console.log('Called getAllCourses');
  this.request('GET', `${apiUrl}`, (res) => {
    Store.commit('user', res);
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
  req.onreadystatechange = function onResponse() {

    // Once the request is finished
    if (this.readyState === 4) {

      // If it successful and a JSON response
      if (this.status === 200 && this.responseText[0] === '{'
        || this.responseText[0] === '[') {
        callback(JSON.parse(this.responseText));

      // If Unauthorized (401)
      } else if (this.status === 401) {
        // TODO Router redirect to login

      // If Server Fault (500)
      } else if (this.status === 401) {
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

const authUrl = 'https://eduboard.io/api/';
const apiUrl = 'https://eduboard.io/api/v1/';

const auth = {};

/**
 * Login or Register, based on action.
 * Redirects to dashboad on success
 */
auth.auth = function (action, params) {
  this.request('POST', `${authUrl}${action}`, (res) => {
    if (res.success !== false) {
      console.log(res);
      this.$store.commit('user', res);
      this.$router.push('/dashboard');
    }
  }, params);
};

/**
 * Logs out the user and redirects to landing page.
 */
auth.logout = function () {
  this.$api.request('POST', `${authUrl}logout`, (res) => {
    if (res.success !== false) {
      this.$router.push('/');
    } else {
      console.log('error on logout');
    }
  });
};

/**
 * Checks if the user is logged in and populates user state.
 * Failure to fetch user will redirect to the login page,
 * if the URL is neither imprint nor landing
 */
auth.getUser = function () {
  this.request('GET', `${apiUrl}/users/${1}/`, (res) => {
    this.$store.commit('user', res);
  });
};

/**
 * Gets the full list of courses pertaining to the user,
 * that is used to populate the dashboard and the course views.
 * Will be fetched on first dashboard entry.
 */
auth.getCourses = function () {
  this.request('GET', `${apiUrl}/users/${1}/courses/`, (res) => {
    this.$store.commit('user', res);
  });
};

/**
 * Gets all publicly available courses from the server,
 * as a list of title, description and time period.
 */
auth.getAllCourses = function () {
  this.request('GET', `${apiUrl}`, (res) => {
    this.$store.commit('user', res);
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
    // If a JSON response
    if (this.readyState === 4 && req.responseText[0] === '{') {
      try {
        callback(JSON.parse(req.responseText));
      } catch (e) {
        callback({
          success: true,
          status: this.status,
          msg: req.responseText,
          note: 'Could not parse JSON response'
        });
      }
    // If not a JSON response
    } else if (this.readyState === 4) {
      callback({
        success: false,
        status: this.status,
        msg: req.responseText,
      });
    }
  };
  req.open(method, url, true);
  if (typeof body !== 'undefined') {
    req.setRequestHeader('Content-Type', 'application/json');
  }
  req.send(JSON.stringify(body));
};

export default auth;

export default {
  /*
   * Request wrapper. Takes a callback and passes JSON response to it.
   * Catched non-JSON responses. Handling of success/failure is left to the callback
   */
  request(method, url, callback, body) {
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
    req.send(body);
  }
};

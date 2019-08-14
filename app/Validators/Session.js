"use strict";

class Session {
  get validateAll() {
    true;
  }

  get rules() {
    return {
      email: "required|email",
      password: "required"
    };
  }
}

module.exports = Session;

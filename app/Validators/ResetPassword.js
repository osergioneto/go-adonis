"use strict";

class ResetPassword {
  get validateAll() {
    true;
  }
  get rules() {
    return {
      token: "required",
      password: "required|confirmed"
    };
  }
}

module.exports = ResetPassword;

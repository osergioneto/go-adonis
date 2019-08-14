"use strict";

class ForgottenPassword {
  get validateAll() {
    true;
  }
  get rules() {
    return {
      email: "required|email",
      redirect_url: "required|url"
    };
  }
}

module.exports = ForgottenPassword;

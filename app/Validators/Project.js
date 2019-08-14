"use strict";

class Project {
  get rules() {
    return {
      title: "required",
      description: "required"
    };
  }
}

module.exports = Project;

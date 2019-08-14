"use strict";

class Task {
  get validateAll() {
    true;
  }
  get rules() {
    return {
      title: "required",
      due_date: "date"
    };
  }
}

module.exports = Task;

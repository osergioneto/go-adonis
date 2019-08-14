"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("", "StatusController.index");

Route.post("users", "UserController.store").validator("User");
Route.post("sessions", "SessionController.store").validator("Session");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.get("/files/:id", "FileController.show");
Route.group(() => {
  Route.post("/files", "FileController.store");
  Route.resource("projects", "ProjectController")
    .apiOnly()
    .validator(new Map([[["projects.store"], ["Project"]]]));
  Route.resource("projects.tasks", "TaskController")
    .apiOnly()
    .validator(new Map([[["projects.store"], ["Task"]]]));
}).middleware(["auth"]);

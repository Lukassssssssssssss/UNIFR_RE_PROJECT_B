// Import necessary modules from Aurelia
import { IRoute } from "@aurelia/router";
import { customElement } from "aurelia";

// Define MyApp custom element and its template
@customElement({
  name: "my-app",
  template: `<template>
    <au-viewport></au-viewport>
  </template>`,
})
export class MyApp {

  // Define the routes for the application
  static routes: IRoute[] = [
    {
      path: ["", "login"],
      component: () => import("./views/login/login"),
      title: "Login",
    },
    {
      path: "dashboard",
      component: () => import("./views/Dashboard/Dashboard"),
      title: "Dashboard",
    },
    {
      path: "courses",
      component: () => import("./views/courses/courses"),
      title: "Courses",
    },
    {
      path: "grade",
      component: () => import("./views/grade/grade"),
      title: "Grade",
    },
    {
      path: "billing",
      component: () => import("./views/billing/billing"),
      title: "Billing",
    },
    {
      path: "notifications",
      component: () => import("./views/notifications/notifications"),
      title: "Notifications",
    },
  ];
}


import { IRoute } from "@aurelia/router";
import { customElement } from "aurelia";

@customElement({
  name: "my-app",
  template: `<template>
    <au-viewport></au-viewport>
  </template>`,
})
export class MyApp {
  static routes: IRoute[] = [
    {
      path: ["", "login"], // Standardroute ("/") und Login-Route
      component: () => import("./views/login/login"), // Login-Komponente
      title: "Login",
    },
    {
      path: "dashboard", // Route für das Dashboard
      component: () => import("./views/Dashboard/Dashboard"), // Dashboard-Komponente
      title: "Dashboard",
    },
  ];
}

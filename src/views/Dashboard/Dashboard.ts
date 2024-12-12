import { customElement } from "aurelia";
import template from "./Dashboard.html";

@customElement({ name: "Dashboard", template })
export class Dashboard {
  myMethod() {
    alert("You are now on the Dashboard page!");
  }
}

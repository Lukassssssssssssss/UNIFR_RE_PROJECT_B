import { customElement } from "aurelia";
import template from "./Dashboard.html";

@customElement({ name: "Dashboard", template })
export class Dashboard {
  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}

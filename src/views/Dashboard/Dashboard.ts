import { customElement } from "aurelia";
import template from "./Dashboard.html";

// Define the Dashboard custom element
@customElement({ name: "Dashboard", template })
export class Dashboard {
  // Method to handle the logout functionality
  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}

import { customElement } from "aurelia";
import template from "./notifications.html";

// Define a custom element 'notifications' and associate it with template
@customElement({ name: "notifications", template })
export class Notifications {
  // Array of notifications to be displayed in the component
  notifications = [
    { date: "11.12.2023", message: 'You have an upcoming exam for "Algorithmic" on 15.12.2023.' },
    { date: "10.12.2023", message: 'Your payment for "Semester Bill" has been processed.' },
    { date: "09.12.2023", message: 'New course materials for "Mathematics II" are available.' },
  ];

  // Method to handle the logout action
  logout() {
    alert("You have been logged out.");
    window.location.href = "/";
  }
}

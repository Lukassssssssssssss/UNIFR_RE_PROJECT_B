import { customElement } from "aurelia";
import template from "./grade.html";

// Define class as custom element with name "grade" and provided template
@customElement({ name: "grade", template })
export class Grade {
  // Array holding grade data for each course
  grades = [
    { id: 1, name: "Decision Support I", etcs: 5, grade: 5, passed: "Yes" },
    { id: 2, name: "Algorithmic", etcs: 6, grade: 4, passed: "Yes" },
    { id: 3, name: "Mathematics II", etcs: 6, grade: 4.25, passed: "Yes" },
    { id: 4, name: "Statistics", etcs: 4.5, grade: 3, passed: "No" },
    { id: 5, name: "Business Informatics I", etcs: 6, grade: 4, passed: "Yes" },
  ];

  // Method to log the user out and redirect to the login page
  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}

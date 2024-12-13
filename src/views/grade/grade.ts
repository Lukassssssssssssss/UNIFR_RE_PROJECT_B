import { customElement } from "aurelia";
import template from "./grade.html";

@customElement({ name: "grade", template })
export class Grade {
  grades = [
    { id: 1, name: "Decision Support I", etcs: 5, grade: 5, passed: "Yes" },
    { id: 2, name: "Algorithmic", etcs: 6, grade: 4, passed: "Yes" },
    { id: 3, name: "Mathematics II", etcs: 6, grade: 4.25, passed: "Yes" },
    { id: 4, name: "Statistics", etcs: 4.5, grade: 3, passed: "No" },
    { id: 5, name: "Business Informatics I", etcs: 6, grade: 4, passed: "Yes" },
  ];

  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}

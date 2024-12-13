import { customElement } from "aurelia";
import template from "./courses.html";

@customElement({ name: "courses", template })
export class Courses {
  courses = [
    { id: 1, name: "Decision Support I", etcs: 5, availability: "29/40", prerequisite: "None" },
    { id: 2, name: "Algorithmic", etcs: 6, availability: "No Restrictions", prerequisite: "Fulfilled" },
    { id: 3, name: "Mathematics II", etcs: 6, availability: "No Restrictions", prerequisite: "Not fulfilled" },
    { id: 4, name: "Statistics", etcs: 4.5, availability: "No Restrictions", prerequisite: "None" },
    { id: 5, name: "Business Informatics I", etcs: 6, availability: "30/30", prerequisite: "None" },
  ];

  
  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}


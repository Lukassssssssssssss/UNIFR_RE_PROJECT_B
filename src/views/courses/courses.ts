import { customElement } from "aurelia";
import template from "./courses.html";

// Define custom element with name 'courses' and associated template
@customElement({ name: "courses", template })
export class Courses {
  // Array holding course data
  courses = [
    { id: 1, name: "Decision Support I", etcs: 5, availability: "29/40", prerequisite: "None" },
    { id: 2, name: "Algorithmic", etcs: 6, availability: "No Restrictions", prerequisite: "Fulfilled" },
    { id: 3, name: "Mathematics II", etcs: 6, availability: "No Restrictions", prerequisite: "Not fulfilled" },
    { id: 4, name: "Statistics", etcs: 4.5, availability: "No Restrictions", prerequisite: "None" },
    { id: 5, name: "Business Informatics I", etcs: 6, availability: "30/30", prerequisite: "None" },
  ];

  // Function to handle user logout
  logout() {
    alert("You have been logged out.");
    window.location.href = "/";
  }
}


import { customElement } from "aurelia";
import template from "./billing.html";

@customElement({ name: "billing", template })
export class Billing {
  bills = [
    { action: "Pay", bill: "Exam SES", amount: "100.-", dueDate: "11.11.2023", confirmation: "Not Paid" },
    { action: "See Details", bill: "Semester Bill", amount: "835.-", dueDate: "10.10.2023", confirmation: "In Process" },
    { action: "See Details", bill: "Exams SES", amount: "100.-", dueDate: "12.11.2023", confirmation: "Paid" },
    { action: "See Details", bill: "Semester Bill", amount: "835.-", dueDate: "09.10.2023", confirmation: "Paid" },
    { action: "See Details", bill: "Exams SES", amount: "120.-", dueDate: "13.11.2023", confirmation: "Paid" },
  ];

  logout() {
    alert("You have been logged out.");
    window.location.href = "/"; // Zurück zur Login-Seite
  }
}

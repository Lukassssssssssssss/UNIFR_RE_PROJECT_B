import { IRouter } from "@aurelia/router";
import { inject } from "aurelia";

// Inject IRouter service into this class
@inject(IRouter)
export class Login {
  constructor(private router: IRouter) { }

  // Method to validate user login
  validateUser(event: Event): void {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Get values of the email and password input fields
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    // If both email and password are provided navigate to 'dashboard' route
    if (email && password) {
      this.router.load("dashboard");
    } else {
      alert("Please enter valid login credentials!");
    }
  }
}

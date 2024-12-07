import { Router } from "@aurelia/router";
import { resolve } from "aurelia";

export class Login {
  private readonly router: Router = resolve(Router);

  private validUser = {
    email: "Lukas.Staub@unifr.ch",
    password: "password123",
  };

  validateUser(event: Event): void {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (email === this.validUser.email && password === this.validUser.password) {
      // Weiterleitung zur 2authentification-Seite
      this.router.load("2authentification");
    } else {
      alert("Error: Wrong email or password");
    }
  }
}

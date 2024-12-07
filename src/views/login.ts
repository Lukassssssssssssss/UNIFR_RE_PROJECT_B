import { Router } from "@aurelia/router";
import { inject } from "aurelia";

@inject(Router)
export class Login {
  constructor(private router: Router) {}

  private validUser = {
    email: "Lukas.Staub@unifr.ch",
    password: "password123",
  };

  validateUser(event: Event): void {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    if (
      email === this.validUser.email &&
      password === this.validUser.password
    ) {
      this.router.load("2authentification");
    } else {
      alert("Error: Wrong email or password");
    }
  }
}

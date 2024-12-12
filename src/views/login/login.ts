import { IRouter } from "@aurelia/router";
import { inject } from "aurelia";

@inject(IRouter)
export class Login {
  constructor(private router: IRouter) {}

  validateUser(event: Event): void {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Hier könntest du auch eine Validierung für Login und Passwort einfügen
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    if (email && password) {
      // Leite zur 'dashboard'-Route weiter
      this.router.load("dashboard");
    } else {
      alert("Bitte geben Sie gültige Anmeldedaten ein!");
    }
  }
}

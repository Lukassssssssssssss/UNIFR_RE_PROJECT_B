import { customElement } from "aurelia";
import template from "./2authentification.html";

@customElement({ name: "2authentification", template })
export class TwoAuth {
  myMethod() {
    alert("You are now on the 2authentification page!");
  }
}

import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";

// Aurelia-Instanz starten
Aurelia.register(RouterConfiguration).app(MyApp).start();

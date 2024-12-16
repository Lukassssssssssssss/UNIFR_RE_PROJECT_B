// Importe Aurelia framework and modules
import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";

// Starting Aurelia application
// Registers RouterConfiguration and set MyApp as the root component
Aurelia.register(RouterConfiguration).app(MyApp).start();

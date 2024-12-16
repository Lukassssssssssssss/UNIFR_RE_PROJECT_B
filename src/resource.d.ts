declare module "*.html" {
  // Import necessary types from Aurelia
  import { IContainer, PartialBindableDefinition } from "aurelia";

  // Export constants related to the HTML file
  export const name: string;
  export const template: string;
  export default template;
  export const dependencies: string[];
  export const containerless: boolean | undefined;
  export const bindables: Record<string, PartialBindableDefinition>;
  export const shadowOptions: { mode: "open" | "closed" } | undefined;
  export function register(container: IContainer): void;
}


// Declare modules for "*.css" and "*.scss" files
declare module "*.css";
declare module "*.scss";

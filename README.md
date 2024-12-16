# aurelia-mdc-vite

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Project Repository
Find the project on GitHub: [CampusNext Repository](https://github.com/Lukassssssssssssss/campusnext.git)

## Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) 

## Installation Instructions
1. **Clone the Repository**  
   Open your terminal and run:
   git clone https://github.com/Lukassssssssssssss/campusnext.git

2. **Navigate to the project Directory**  
   Change to the directory where the repository was cloned:
   cd campusnext

3. **Install Dependencies** 
    Install the necessary dependencies by running:
    npm install

4. **Start the Development Server** 
    To start the dev server with hot module replacement enabled, run:
    npm start
    Once the server is running, open your browser and navigate to:
    http://localhost:5173
    
5. **Build for Production**
    To create an optimized build for production, execute: 
    npm run build
    The output will be available in the dist directory.

## Features
- Sign into their accounts.
- Access key parts of the system at all times.  
- Able to log out at all times. 
- Browse available courses and enroll in them.
- View important system or admin messages.
- Access grade details and course performance.
- Receive your bills and pay them here. 

## Project Structure

The project follows a modular structure using **Aurelia** for building the frontend and **Vite** for fast bundling. 

Overview of the key directories and files:

- **`src/`**: Contains the main source code, including views and components.
  - **`views/`**: This directory contains different pages and components in the app:
    - `login/`: Contains the login form and related components.
    - `Dashboard/`: The dashboard page where notifications and user data are displayed.
    - `courses/`: Displays available courses and allows enrollment.
    - `grade/`: Displays grade-related information (currently under development).
    - `billing/`: Manages billing information (currently under development).
    - `notifications/`: Displays notifications from the system or administrators.
  - styles: Every view has a SCSS file for styling.

- **`main.ts`**: The entry point of the application. It imports **Aurelia** and **RouterConfiguration** and initializes the app with `MyApp` as the root component. It also configures routing for different views in the application.

- **`my-app.ts`**: Defines the `MyApp` custom element which is the root component of the application. This file also specifies the routes for different pages in the app, such as login, dashboard, courses, grade, etc.

- **`my-app.html`**: The template file associated with `MyApp`. It includes necessary view components and the `<au-viewport>` element, where the routed views will be injected based on the current route.

- **`resource.d.ts`**: Type declaration file that provides type information for importing HTML, CSS, and SCSS files as modules. This helps Aurelia recognize these resources as part of the application.

- **`package.json`**: Lists the project's dependencies, scripts and configuration.

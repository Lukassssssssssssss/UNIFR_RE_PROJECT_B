# UniFR RE Project B

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Project Repository
Find the project on GitHub: [UNIFR_RE_PROJECT_B Repository](https://github.com/Lukassssssssssssss/UNIFR_RE_PROJECT_B)

## Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) 

## Installation Instructions
1. **Clone the Repository**  
   Open your terminal and run:
   git ```clone``` https://github.com/Lukassssssssssssss/UNIFR_RE_PROJECT_B

2. **Navigate to the project Directory**  
   Change to the directory where the repository was cloned:
   cd UNIFR_RE_PROJECT_B

3. **Install Dependencies** 
    Install the necessary dependencies by running:
    npm install

4. **Start the Development Server** 
    To start the dev server with hot module replacement enabled, run:
    npm start
    Once the server is running, open your browser and navigate to:
    http://localhost:5173

## Features
- Sign into your account (now it works as long as you login using an E-Mail format). 
- Access key parts of the system at all times.  
- Able to log out at all times. 
- Browse available courses and enroll in them. You'll be able to see which courses are available and which you've already enlisted in. 
- View important system or admin messages. You'll be met with a small window where you can see if you have any new messages. And you can head over to the "Notifications" part and check out all your messages.  
- Access grade details and course performance. You'll be able to see what courses have already been evaluated and which ones you haven't. You'll also see if you've passed or not. 
- Receive your bills and check their status (paid or not paid).  

## Project Structure
The project follows a modular structure using **Aurelia** for building the frontend and **Vite** for fast bundling. 

Overview of the key directories and files:

- **`src/`**: Contains the main source code, including views and components.
  - **`views/`**: This directory contains different pages and components in the app:
    - `login/`: Contains the login form and related components.
    - `Dashboard/`: The dashboard page where notifications and user data are displayed.
    - `courses/`: Displays available courses and allows enrollment.
    - `grade/`: Displays grade-related information.
    - `billing/`: Manages billing information.
    - `notifications/`: Displays notifications from the system or administrators.
  - styles: Every view has a SCSS file for styling.

- **`main.ts`**: The entry point of the application. It imports **Aurelia** and **RouterConfiguration** and initializes the app with `MyApp` as the root component. It also configures routing for different views in the application.

- **`my-app.ts`**: Defines the `MyApp` custom element which is the root component of the application. This file also specifies the routes for different pages in the app, such as login, dashboard, courses, grade, etc.

- **`my-app.html`**: The template file associated with `MyApp`. It includes necessary view components and the `<au-viewport>` element, where the routed views will be injected based on the current route.

- **`resource.d.ts`**: Type declaration file that provides type information for importing HTML, CSS, and SCSS files as modules. This helps Aurelia recognize these resources as part of the application.

- **`package.json`**: Lists the project's dependencies, scripts and configuration.

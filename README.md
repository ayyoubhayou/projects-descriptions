# ProjectsDescriptions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## App mechanism

To test the app, open two browser windows, one on `http://localhost:4200/` and the second `http://localhost:4200/project/id` (further details below).

The app has three main views :

#### Home page

A static view that would contain the company description for example

#### Project description

When a project is selected, the Home page will automatically display a project description (tbd) and start a timer (currently set at 5 seconds for testing purposes) after which the app will display again the static content

#### Project selection

A static view that triggers a call to change the selected project in the database.
This can be done by navigating to the link `http://localhost:4200/project/id` where `id` is the ID of the project to display

## Connect to Firebase Realtime database

This project uses a realtime database. In order to get it working, you should add a new folder `src/environments/` where you will add an `environment.ts` file containing the following information :
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "<Your API Key>",
    authDomain: "<Your Auth Domain>",
    databaseURL: '<Your Realtime database URL>',
    projectId: "<Your Project ID>",
    storageBucket: "<Your Storage Bucket ID>",
    messagingSenderId: "<Your Messaging sender ID>",
    appId: "<Your App ID>",
    measurementId: "<Your Measurement ID>"
  }
};
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To get the app running

1. Clone this repository.

2. `npm install`

3. `npm start`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### The app

The goal of the app is to simulate a job vacancy page, where a job applicant can submit their information along with files for a CV and cover letter.

The app itself is divided into three components, a navigaiton (`Navigation.js`), vacancy page (`VacancyPage.js`) and a footer (`Footer.js`).

Depending on the app building architecture, the `VacancyPage.js` component could be further split down to more components, for example having the notification (for a successful submit), the form and the FAQ section as separate components.

### Summary

- Added a logo for some personality and branding.
- All links are empty (pointing to `#`). All routing would usually be handled by something like [React Router](https://github.com/ReactTraining/react-router).
- Form data is stored in the state as per React best practices. From there it would be ideally submitted.
- The state of the application can be checked/tested with [React Chrome Developer Tools](https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html).
- [React-Bootstrap](https://react-bootstrap.github.io/) is used for the grid layout, as well as the UI components (form, alert etc.).
- [react-burger-menu](https://github.com/negomi/react-burger-menu) is used for the collapsible navigation.
- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) is used for the accordion FAQ section.

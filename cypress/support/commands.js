import { signupPage } from "../pages/Signup";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("signUpCommands", (dataSignup) => {
  cy.get(".title").should("have.text", "Signing up is easy!");
  cy.get("#rightPanel > p").should(
    "have.text",
    "If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
  );
  signupPage.submit().then(($button) => {
    expect($button).to.have.css("background-color", "rgb(202, 129, 37)");
  });
  signupPage.getFirstname(dataSignup.firstName);
  signupPage.getLastName(dataSignup.lastName);
  signupPage.getAddress(dataSignup.address);
  signupPage.getCity(dataSignup.city);
  signupPage.getState(dataSignup.state);
  signupPage.getZip(dataSignup.zipCode);
  signupPage.getPhone(dataSignup.phone);
  signupPage.getSnn(dataSignup.SNN);
  signupPage.getUsername(dataSignup.usernameSignup);
  signupPage.getPassword(dataSignup.passwordSingup);
  signupPage.getConfirm(dataSignup.confirmPassword);
  signupPage.submit().click();
});

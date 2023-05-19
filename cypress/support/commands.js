

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

// Cypress.Commands.add("signUpCommands", (dataSignup) => {
//   signupPage.getTitle().should("have.text", validationMessages.signUpText);
//   signupPage.getSignupText().should("have.text", validationMessages.accountText);
//   signupPage.submit().then(($button) => {
//     expect($button).to.have.css("background-color", "rgb(202, 129, 37)");
//   });
//   signupPage.getFirstName(dataSignup.firstName);
//   signupPage.getLastName(dataSignup.lastName);
//   signupPage.getAddress(dataSignup.address);
//   signupPage.getCity(dataSignup.city);
//   signupPage.getState(dataSignup.state);
//   signupPage.getZip(dataSignup.zipCode);
//   signupPage.getPhone(dataSignup.phone);
//   signupPage.getSnn(dataSignup.SNN);
//   signupPage.getUsername(dataSignup.usernameSignup);
//   signupPage.getPassword(dataSignup.passwordSingup);
//   signupPage.getConfirm(dataSignup.confirmPassword);
//   signupPage.submit().click();
// });

// Cypress.Commands.add("emptyErrorCommands", (signUp) => {
//   signupPage.submit().click();

//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyFirstName);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyLastName);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyAddress);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyCity);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyState);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyZip);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptySNN);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyUsername);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyPassword);
//   });
//   cy.get(".error").then(($error) => {
//     expect($error).to.contain(validationMessages.emptyConfirm);
//   });
// });

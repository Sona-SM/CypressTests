import { signupPage } from "../pages/Signup";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";
import { emptyData } from "../utils/data";
import { dataSignup } from "../utils/data";

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
  signupPage.getTitle().should("have.text", validationMessages.signUpText);
  signupPage.getSignupText().should("have.text", validationMessages.accountText);
  signupPage.submit().then(($button) => {
    expect($button).to.have.css("background-color", "rgb(202, 129, 37)");
  });
  signupPage.getFirstName(dataSignup.firstName);
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

Cypress.Commands.add("emptyErrorCommands", (signUp) => {
  signupPage.submit().click();

  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyFirstName);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyLastName);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyAddress);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyCity);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyState);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyZip);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptySNN);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyUsername);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyPassword);
  });
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.emptyConfirm);
  });
});

Cypress.Commands.add("pageCommands", (dataSignup) => {
  signupPage.getTitle().should("have.text", dataSignup.title);
  signupPage
    .getTextUnderSignup()
    .should("have.text", dataSignup.textUnderRegister);
  signupPage.getSolutions().should("be.visible");
  signupPage.submitAboutUs().click();
  signupPage.visit("about.htm");
  signupPage.getAboutUsText().should("be.visible");
  signupPage.submitServices().click();
  signupPage.getPanelServices().should("be.visible");
  cy.wait(1000);
  signupPage.submitAdminPage().click();
  signupPage.getAdminPanelView().should("be.visible");
  signupPage
    .submitRestJsonRadio()
    .click()
    .should("be.checked")
    .and("have.value", dataSignup.textJson);
  signupPage.submitSubmit().click();
  signupPage
    .getSuccessSettings()
    .should("have.text", dataSignup.settingsSuccess);
  signupPage.visit("sitemap.htm");
  signupPage.getRegisterPanel().should("be.visible");
  signupPage.getLoginPanel().should("be.visible");
  signupPage.visit("solutions/");
  signupPage.getHomeLogo().should("be.visible");
  cy.visit("www.parasoft.com/products/");
  cy.wait(2000);
  cy.get(".inner-banner-wrap").should("be.visible");
  cy.go("back");
  signupPage.getMainLogo().should("be.visible");
});

Cypress.Commands.add("existedCommands", (dataSignup) => {
  signupPage.getFirstName(dataSignup.firstName);
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
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.existedUserError);
  });

  Cypress.Commands.add("differentPasswordsCommands", (dataSignup) => {
    cy.get(".error").then(($error) => {
      expect($error).to.contain(validationMessages.notMatchPassword);
    });
  });
});

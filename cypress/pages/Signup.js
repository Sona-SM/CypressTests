class SignupPage {
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  }

  getSignupText() {
    return cy.get("#rightPanel > p");
  }
  getSignupForm() {
    return cy.get(".form2");
  }

  getTitle() {
    return cy.get(".title");
  }

  getTextUnderSignup() {
    return cy.get("#rightPanel > p");
  }

  getSolutions() {
    return cy.get(".Solutions");
  }

  getAboutUsText() {
    return cy.get("#rightPanel");
  }
  submitServices() {
    return cy.get(".leftmenu > :nth-child(3) > a");
  }

  getPanelServices() {
    return cy.get("#rightPanel > :nth-child(4)");
  }

  submitAboutUs() {
    return cy.get(".leftmenu > :nth-child(2) > a");
  }

  submitAdminPage() {
    return cy.get(".leftmenu > :nth-child(6) > a");
  }
  getFirstname() {
    return cy.get(':nth-child(1) > [width="20%"]');
  }
  getAdminPanelView() {
    return cy.get("#rightPanel");
  }

  submitSubmit() {
    return cy.get("#adminForm > .button");
  }

  getHomeLogo() {
    return cy.get(".home > a");
  }

  getMainLogo() {
    return cy.get("#topPanel");
  }
  getSuccessSettings() {
    return cy.get("#rightPanel > p > b");
  }

  getRegisterPanel() {
    return cy.get("#rightPanel");
  }

  getLoginPanel() {
    return cy.get("#loginPanel > form");
  }
  submitRestJsonRadio() {
    return cy.get("#accessMode3");
  }

  getFirstName(value) {
    return cy.get(':nth-child(1) > [width="20%"]').type(value);
  }
  getLastName(value) {
    return cy.get(':nth-child(2) > [width="20%"]').type(value);
  }

  getAddress(value) {
    return cy.get(':nth-child(3) > [width="20%"]').type(value);
  }

  getCity(value) {
    return cy.get(':nth-child(4) > [width="20%"]').type(value);
  }

  getState(value) {
    return cy.get(':nth-child(5) > [width="20%"]').type(value);
  }

  getZip(value) {
    return cy.get(':nth-child(6) > [width="20%"]').type(value);
  }

  getPhone(value) {
    return cy.get(':nth-child(7) > [width="20%"]').type(value);
  }

  getSnn(value) {
    return cy.get(':nth-child(8) > [width="20%"]').type(value);
  }

  getUsername(value) {
    return cy.get(':nth-child(10) > [width="20%"]').type(value);
  }

  getPassword(value) {
    return cy.get(':nth-child(11) > [width="20%"]').type(value);
  }

  getConfirm(value) {
    return cy.get(':nth-child(12) > [width="20%"]').type(value);
  }

  submit() {
    return cy.get('[colspan="2"] > .button');
  }
}

export const signupPage = new SignupPage();

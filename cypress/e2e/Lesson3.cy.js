import { signupPage } from "../pages/Signup";
import { dataSignup } from "../utils/data";
import { validationMessages } from "../utils/messages";


describe("SignUp with valid data", () => {
  it("Verify signup functionality with valid credentials", () => {
    signupPage.visit();
    cy.signUpCommands(dataSignup);
    // cy.get(".title").should("have.text", "Signing up is easy!");
    // cy.get("#rightPanel > p").should("have.text","If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
    // );
    // signupPage.submit().then(($button) => {
    //     expect($button).to.have.css('background-color','rgb(202, 129, 37)');})
    // signupPage.getFirstname(dataSignup.firstName);
    // signupPage.getLastName(dataSignup.lastName);
    // signupPage.getAddress(dataSignup.address);
    // signupPage.getCity(dataSignup.city);
    // signupPage.getState(dataSignup.state);
    // signupPage.getZip(dataSignup.zipCode);
    // signupPage.getPhone(dataSignup.phone);
    // signupPage.getSnn(dataSignup.SNN);
    // signupPage.getUsername(dataSignup.usernameSignup);
    // signupPage.getPassword(dataSignup.passwordSingup);
    // signupPage.getConfirm(dataSignup.confirmPassword);
    // signupPage.submit().click();
  });

  it("Signup functonality with existed user", () => {
    signupPage.visit();
    cy.get(".title").should("have.text", "Signing up is easy!");
    cy.get("#rightPanel > p").should(
      "have.text",
      "If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
    );
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
    cy.get(".error").then(($error) => {
      expect($error).to.contain(validationMessages.existedUserError);
    });
  });
  

  it("Signup functonality with empty fields", () => {
    signupPage.visit();
    cy.get(".title").should("have.text", "Signing up is easy!");
    cy.get("#rightPanel > p").should(
      "have.text",
      "If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
    );
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
    signupPage.getConfirm(dataSignup.notMatchPassword);
    signupPage.submit().click();
    cy.get(".error").then(($error) => {
      expect($error).to.contain(validationMessages.notMatchPassword);
    });
  });
});


it("Verify signup functionality with valid credentials", () => {
  signupPage.visit();
  cy.get(".title").should("have.text", "Signing up is easy!");
  cy.get("#rightPanel > p").should("have.text","If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
  );
  cy.get('.Solutions').should('be.visible');
  cy.get('.leftmenu > :nth-child(2) > a').click();
  cy.get('#rightPanel').should('be.visible');
  cy.get('.leftmenu > :nth-child(3) > a').click();
  cy.get(':nth-child(6) > tbody > :nth-child(1) > [style="width: 1183px;"]').should('be.visible');
  cy.wait(1000);
  cy.get('.leftmenu > :nth-child(6) > a').click();
  cy.get('#rightPanel').should('be.visible');
  cy.get('#accessMode3').should('be.checked').and('have.value', 'restjson');
  cy.visit('https://parabank.parasoft.com/parabank/sitemap.htm');
  cy.get('#rightPanel').should('be.visible');
  cy.get('#loginPanel > :nth-child(2) > a').click();
  cy.get('.form2').should('be.visible');
  cy.get('.title').should('have.text', 'Customer Lookup')
  cy.get('#loginPanel > :nth-child(3) > a').should('be.visible')
  cy.visit('https://www.parasoft.com/solutions/');
  cy.get('.home-logo > a > img').should('be.visible');
  cy.wait(1000);
  cy.get('#hs-eu-confirmation-button').click();
  cy.go('back');
  cy.wait(1000);
  cy.visit('https://www.parasoft.com/products/');
  cy.get('.inner-banner').should('be.visible');
  cy.go('back');
  cy.get('.home > a').should('be.visible');
});
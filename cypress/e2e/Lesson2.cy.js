import { loginPage } from "../pages/Login";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";


describe("SignIn postive case", () => {
  it.only("Verify login functionality with valid credentials", () => {
   loginPage.visit();
   loginPage.getloginForm().should("contain", "Username").and("contain", "Password");
   loginPage.getUsername(data.username);
   loginPage.getPassword(data.password);
   loginPage.submit().then(($button) => {
    expect($button).to.have.css('background-color','rgb(202, 129, 37)');
    expect($button).to.have.value('Log In')
  });
  loginPage.submit().click();
  cy.url().should('include', 'https://parabank.parasoft.com/parabank/overview.htm');
  });
});

  it("Verify login functionality with empty credentials", () => {
    loginPage.visit();
    loginPage.submit();
    cy.get(".error").then(($error) => {
      expect($error).to.contain(validationMessages.emptyError);
    });
   });


it("Verify login functionality with not right credentials", () => {
  loginPage.visit();
  loginPage.getUsername(data.usernameInvaid);
  loginPage.getPassword(data.passwordInvaid);
  loginPage.submit();
  cy.get(".error").then(($error) => {
    expect($error).to.contain(validationMessages.loginError);
  });
 });



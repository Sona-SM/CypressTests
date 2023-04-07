import { loginPage } from "../pages/Login";
import { data } from "../utils/data";

describe("SignIn postive case", () => {
  it("Verify login functionality with valid credentials", () => {
   loginPage.visit();
   loginPage.getUsername(data.username);
   loginPage.getPassword(data.password);
   loginPage.submit()
   cy.url().should('include', 'https://parabank.parasoft.com/parabank/overview.htm')
  });
})
  it("Verify login functionality with empty credentials", () => {
    loginPage.visit();
    loginPage.submit()
    cy.get('.error').should('have.text', 'Please enter a username and password.')
   });

it.only("Verify login functionality with not right credentials", () => {
  loginPage.visit();
  loginPage.getUsername(data.usernameInvaid);
   loginPage.getPassword(data.passwordInvaid);
  loginPage.submit()
  cy.get('.error').should('have.text', 'An internal error has occurred and has been logged.')
 });



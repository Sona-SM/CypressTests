import { signupPage } from "../pages/Signup";
import { dataSignup } from "../utils/data";
import { validationMessages } from "../utils/messages";


describe("SignUp with valid data", () => {
  it("Verify signup functionality with valid credentials", () => {
    signupPage.visit();
    cy.signUpCommands(dataSignup);
  });

    it("Verify signup functionality with different passwords", () => {
      signupPage.visit();
      cy.signUpCommands(dataSignup);
    });
  
  it("Signup functonality with existed user", () => {
    signupPage.visit();
    cy.existedCommands(dataSignup);
  });

  it("Signup functonality with empty fields", () => {
    signupPage.visit();
    cy.emptyErrorCommands(dataSignup);
  });

it("Verify the other functionality of webpage", () => {
  signupPage.visit();
  cy.pageCommands(dataSignup);
});
})
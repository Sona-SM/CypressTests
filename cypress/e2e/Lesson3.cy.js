import { signupPage } from "../pages/Signup";
import { dataSignup } from "../utils/data";
import { validationMessages } from "../utils/messages";


describe("SignUp with valid data", () => {
  it.only("Verify signup functionality with valid credentials", () => {
    signupPage.visit();
    cy.get(".title").should("have.text", "Signing up is easy!");
    cy.get("#rightPanel > p").should("have.text","If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information."
    );
    signupPage.submit().then(($button) => {
        expect($button).to.have.css('background-color','rgb(202, 129, 37)');})
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

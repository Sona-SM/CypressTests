import { signUp } from "../pages/autoExercise/Signup";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";


describe("Sign up", () => {
  
  it("Verify login functionality with valid credentials", () => {
    signUp.visit("login");
    cy.pageCommands(signUp, data);
  });

  // it("Verify caresul flow", () => {
  //   signUp.visit();
  //   cy.caruselCommands(signUp, data);
  // });

});

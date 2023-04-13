import { signUp } from "../pages/autoExercise/Signup";

let userName,secondUserName
describe("Sign up", () => {
  beforeEach(() => {});
  it("Verify login functionality with valid credentials", () => {
    signUp.visit("login");
    signUp.getUsername().type(signUp.generateRandomName(5, ""));
    signUp.getUsername().invoke("val").then((val) => {
        userName = val;
        cy.log(userName);
      });
      signUp.getPassword().type(signUp.generateRandomName(5, "@gmail.com"));
      signUp.submit().click();
    cy.get('[data-qa="name"]').invoke("val").then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    cy.get('[data-qa="name"]').then(($val)=>{
      expect(secondUserName).to.equal(userName)
    })
  });
});
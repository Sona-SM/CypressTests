import { signUp } from "../pages/autoExercise/Signup";
import { data } from "../utils/data";

let userName,secondUserName
describe("Sign up", () => {
  it("Verify login functionality with valid credentials", () => {
    signUp.visit("login");
    signUp.getUsername().type(signUp.generateRandomName(5, ""));
    signUp.getUsername().invoke("val").then((val) => {
        userName = val;
        cy.log(userName);
      });
      signUp.getEmail().type(signUp.generateRandomName(5, "@gmail.com"));
      signUp.submit().click();
    cy.get('[data-qa="name"]').invoke("val").then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    cy.get('[data-qa="name"]').then(($val)=>{
      expect(secondUserName).to.equal(userName)
    });
    signUp.getGender().first().check();
    signUp.getPassword(data.password).type('password').should('contain.text', '').and('have.attr', 'required');
    cy.get('[data-qa="days"]').select(1).invoke("val").should("eq", "1");
    cy.get('[data-qa="months"]').select('March').invoke("val").should("eq", "3");
    cy.get('[data-qa="years"]').select('2000').invoke("val").should("eq", "2000");
    cy.get('#newsletter').click().should('not.have.attr', 'required');
    cy.get('#optin').click().should('not.have.attr', 'required');
    cy.get('form > .title > b').should("have.text", "Address Information");
    signUp.getFirstName(data.firstName).type("First Name").should('contain.text', '').and('have.attr', 'required');
    signUp.getLastName(data.lastName).type("Last Name").should('contain.text', '').and('have.attr', 'required');
    signUp.getCompany(data.company).type('Company').should('not.have.attr', 'required');
    cy.get(':nth-child(14) > label').should("have.text", "Address * (Street address, P.O. Box, Company name, etc.)");
    signUp.getAddress(data.address).type('Address Name');
    cy.get('[data-qa="address2"]').should('not.have.attr', 'required');
    cy.get('[data-qa="country"]').select(1).invoke("val").should("eq", "United States");
    signUp.getState(data.state).type("State").and('have.attr', 'required');
    signUp.getZip(data.zip).type("0000").and('have.attr', 'required');
    signUp.getCity(data.city).type("City").and('have.attr', 'required');
    signUp.getPhoneNumber(data.mobilePhone).type("1110000000").and('have.attr', 'required');
    signUp.submitCreate().click();
    signUp.visit("account_created");
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and("have.text", "Congratulations! Your new account has been successfully created!");
    signUp.getContinue().click();
    signUp.visit();
    signUp.getButtons().should('be.visible');
    signUp.getLoggedin().then(($val)=>{
        expect(secondUserName).to.equal(userName)
      });
        cy.get(".item").then(($elem) => {
          expect($elem).to.contain('Automation')
          expect($elem).to.contain('Full-Fledged practice website for Automation Engineers')
          expect($elem).to.contain('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
        });
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('be.visible').and('contain','Test Cases');
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('have.css','background-color','rgb(92, 184, 92)');
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').realHover().should('have.css','background-color','rgb(254, 152, 15)')
        cy.get('.active > :nth-child(1) > .apis_list > .btn').should('have.css','background-color','rgb(92, 184, 92)').and('contain','APIs list for practice');
       cy.wait(7000)
       cy.get(".item").should('have.class','active');
       cy.get('.active > :nth-child(2) > .girl').should('be.visible')
      });
  });
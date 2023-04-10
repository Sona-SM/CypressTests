class SignupPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getSignupForm() {
        return cy.get('.form2');
      }
    
      getFirstname(value) {
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
    
export const signupPage=new SignupPage();  
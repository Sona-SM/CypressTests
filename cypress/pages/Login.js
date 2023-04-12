
class LoginPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }
  
  getloginForm() {
    return cy.get("#loginPanel");
  }

  getUsername(value) {
   return cy.get('input[name="username"]').type(value);
  }

  getPassword(value) {
    return cy.get(':nth-child(4) > .input').type(value);
  }

  submit() {
    return  cy.get(":nth-child(5) > .button");
  }
}



export const loginPage=new LoginPage();
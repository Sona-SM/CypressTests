class SignupPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
}

export const SignupPage=new SignupPage();  
class SignupPage {
  visit() {
    cy.visit("https://demoqa.com/webtables");
  }
  getLogo(){
    return cy.get('header > a > img')
  }
  getFirstLineName(){
    return cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)');
  }
  getAddButton(){
    return cy.get('#addNewRecordButton');
  }
  getRegistrationFormTitle(){
    return cy.get('#registration-form-modal')
  }
  getFirstName(){
    return cy.get('#firstName')
  }
  getLastName(){
    return cy.get('#lastName')
  }
  getEmail(){
    return cy.get('#userEmail')
  }
  getAge(){
    return cy.get('#age')
  }
  getSalary(){
    return cy.get('#salary')
  }
  getDepartment(){
    return cy.get('#department')
  }
  submitSubmitButton(){
    return cy.get('#submit')
  }
  getNewAddedUser(){
    return cy.get(':nth-child(4) > .rt-tr > :nth-child(1)')
  }
  getEditAddedUSer(){
    return cy.get('#edit-record-4')
  }
  getEditForm(){
    return cy.get('.modal-header')
  }
}

export const signupPage = new SignupPage();

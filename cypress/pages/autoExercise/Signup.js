class SignUp {
    visit(endpoint) {
      cy.visit(Cypress.env('globalUrl')+endpoint);
    }

  
   getUsername() {
      return cy.get('[data-qa="signup-name"]');
    }
  
    getEmail() {
      return cy.get('[data-qa="signup-email"]');
    }
  
    getPassword() {
        return cy.get('[data-qa="password"]');
      }

    getFirstName() {
        return cy.get('[data-qa="first_name"]');
      }


    getLastName() {
        return cy.get('[data-qa="last_name"]');
    }  

    getCompany(){
        return cy.get('[data-qa="company"]');
    }

    getGender(){
        return cy.get('#id_gender1');
    }

    getAddress(){
        return cy.get('[data-qa="address"]');
    }

    getState(){
        return cy.get('[data-qa="state"]');
    }

    getCity(){
        return cy.get('[data-qa="city"]');
    }
    
    getZip(){
       return cy.get('[data-qa="zipcode"]')
    }

    getPhoneNumber(){
        return cy.get('[data-qa="mobile_number"]');
    }

    getContinue(){
        return cy.get('[data-qa="continue-button"]');
    }

    getButtons(){
        return cy.get('.shop-menu > .nav');
    }

    getLoggedin(){
        return cy.get(':nth-child(10) > a');
    }

    submit() {
        return cy.get('[data-qa="signup-button"]');
      }

    submitCreate(){
        return cy.get('[data-qa="create-account"]');
    }  
    
    generateRandomName(length,email=''){
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return `test${result}${email}`;

    }
  }
  
  export const signUp = new SignUp();
  
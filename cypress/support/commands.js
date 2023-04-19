import { data } from "../utils/data";
import { signUp } from "../pages/autoExercise/Signup";
import { validationMessages } from "../utils/messages";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => { 
  
})
 //function for random name generation 
 Cypress.Commands.add('generateRandomName', (length) => { 
  let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
     counter += 1;
   }
   return `test${result}`;
}) 

Cypress.Commands.add('typeIfDefined', (selector, value) => {
  if (typeof value !== 'undefined') {
    cy.get(selector).type(value);
  }
});

Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { 
});

let userName, secondUserName, firstItem, sameItem, signinEmail, signupEmail, signinPassword, signupPassword
Cypress.Commands.add('pageCommands', (signUp, data) => { 
  signUp.getUsername().type(signUp.generateRandomName(5, ""));
    signUp
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    signUp.getEmail().type(signUp.generateRandomName(5, "@gmail.com"));
    signUp.submit().click();
    signUp
      .getSigninUsername()
      .invoke("val")
      .then((text) => {
        secondUserName = text;
        cy.log(secondUserName);
      });
    signUp.getSigninUsername().then(($val) => {
      expect(secondUserName).to.equal(userName);
    });
    signUp.getGender().first().check();
    signUp
      .getPassword(data.password)
      .type("password")
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp.getCalendarDays().select(1).invoke("val").should("eq", "1");
    signUp.getCalendarMonths().select("March").invoke("val").should("eq", "3");
    signUp.getCalendarYears().select("2000").invoke("val").should("eq", "2000");
    signUp.getNewsletter().click().should("not.have.attr", "required");
    signUp.getOption().click().should("not.have.attr", "required");
    signUp.getAddressInfo().should("have.text", "Address Information");
    signUp
      .getFirstName(data.firstName)
      .type("First Name")
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp
      .getLastName(data.lastName)
      .type("Last Name")
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp
      .getCompany(data.company)
      .type("Company")
      .should("not.have.attr", "required");
    signUp
      .getAddressExampleText()
      .should(
        "have.text",
        "Address * (Street address, P.O. Box, Company name, etc.)"
      );
    signUp.getAddress(data.address).type("Address Name");
    signUp.getSecondAddress().should("not.have.attr", "required");
    signUp.getCountry().select(1).invoke("val").should("eq", "United States");
    signUp.getState(data.state).type("State").and("have.attr", "required");
    signUp.getZip(data.zip).type("0000").and("have.attr", "required");
    signUp.getCity(data.city).type("City").and("have.attr", "required");
    signUp
      .getPhoneNumber(data.mobilePhone)
      .type("1110000000")
      .and("have.attr", "required");
    signUp.submitCreate().click();
    signUp.visit("account_created");
    signUp
      .getSuccesSignupText()
      .should("be.visible")
      .and(
        "have.text",
        validationMessages.successSignedUp
      );
    signUp.getContinue().click();
    signUp.visit();
    signUp.getButtons().should("be.visible");
    signUp.getLoggedin().then(($val) => {
      expect(secondUserName).to.equal(userName);
    });
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain("Automation");
      expect($elem).to.contain(
        validationMessages.caruselPanelFirstText
      );
      expect($elem).to.contain(
       validationMessages.caruselPanelSecondText
      );
    });
    signUp.getTestCases().should("be.visible").and("contain", "Test Cases");
    signUp
      .getTestCases()
      .should("have.css", "background-color", "rgb(92, 184, 92)");
    signUp
      .getTestCases()
      .realHover()
      .should("have.css", "background-color", "rgb(254, 152, 15)");
    signUp
      .getApi()
      .should("have.css", "background-color", "rgb(92, 184, 92)")
      .and("contain", "APIs list for practice");
    cy.wait(7000);
    cy.get(".item").should("have.class", "active");
    signUp.getFirstCaruselItem().should("be.visible");

    signUp.getFirstItem().should("be.visible").and("contain", "Rs. 500");
    signUp
      .getFirstItem()
      .realHover()
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    signUp.submitViewItem().click();
    signUp.visit("product_details/1");
    signUp.getFirstItemView().should("be.visible");
    signUp.getNew().should("be.visible");
    signUp.getNameofFirstItem().and("have.text", "Blue Top");
    signUp.getQuantity().should("have.value", "1");
    signUp.getCategoryofClothes().should("be.visible");
    signUp.getPlusWoman().click();
    signUp.getWoman().should("be.visible");
    signUp.getTop().click();
    signUp.visit("category_products/2");
    signUp.getFirstItem().then(($val) => {
      expect(firstItem).to.equal(sameItem);
    });
    signUp.submitAddToCard().click();
    signUp.getPopupWindow().should("be.visible");
    signUp.getContinueShopping().click();
    signUp.visit("view_cart");
    signUp.getIteminCart().should("be.visible");
    signUp.getCardDelete().click();
    signUp.getEmptyCard().should("be.visible").and("have.value", "");
    signUp.visit("category_products/2");
    signUp.submitAddToCard().click();
    signUp.getContinueShopping().click();
    signUp.visit("view_cart");
    signUp.getProceedCheckout().click();
    signUp.getAddressDelivery().should("be.visible");
    signUp.getCommentInput().type("Thank you");
    signUp.submitPlaceOrder().click();
    signUp.visit("payment");
    signUp.getPaymentInfoInput().should("be.visible");
    signUp.getCardName().type("a");
    signUp.getCardNumber().type("0");
    signUp.getCardCvs().type("000");
    signUp.getCardCvs().trigger("keydown", { keyCode: 9 });
    signUp.getExpiryMonth().type("12");
    signUp.getExpiryMonth().trigger("keydown", { keyCode: 9 });
    signUp.getExpiryYear().type("2050");
    signUp.getPayButton().click();
    signUp.visit("payment_done/0");
    signUp.getOrderReplaced().should("have.text", "Order Placed!");
    signUp.getContinue().click();
    signUp.visit("login");
    signUp.sumbitDeleteAccount().click();
    signUp.visit("delete_account");
    signUp.getAccountDeleted().should("have.text", "Account Deleted!");
    signUp.getContinue().click();
    signUp.visit();
    signUp.getSignupLogin().click();
    signUp.visit("login");
})
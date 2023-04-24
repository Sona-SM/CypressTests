import { signUp } from "../pages/autoExercise/Signup";
import { validationMessages } from "../utils/messages";
import { data } from "../utils/data";
import { randomEmail } from "../utils/data";

Cypress.Commands.add('login', (email, password) => { })

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

let userName, secondUserName, firstItem, sameItem, email, signupEmail
Cypress.Commands.add('pageCommands', (signUp, data) => { 
  signUp.getUsername().type(signUp.generateRandomName(5, ""));
    signUp.getUsername().invoke("val").then((val) => {
        userName = val;
        cy.log(userName);
      });
    signUp.getEmail().type(signUp.generateRandomName(5, "@gmail.com"));
    signUp.getEmail().invoke("val").then((val) => {
        email = val;
        cy.log(email);
      });
    signUp.submit().click();
    signUp.getSigninUsername().invoke("val").then((text) => {
        secondUserName = text;
        cy.log(secondUserName);
      });
    signUp.getSigninUsername().then(($val) => {
      expect(secondUserName).to.equal(userName);
    });
    signUp.getSignupPageEmail().invoke("val").then((text) => {
        signupEmail = text;
        cy.log(signupEmail);
      });
    signUp.getSignupPageEmail().then(($val) => {
      expect(email).to.equal(signupEmail);
    });
    signUp.getGender().first().check();
    signUp
      .getPassword(data.password)
      .type(data.password)
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp.getCalendarDays().select(1).invoke("val").should("eq", "1");
    signUp.getCalendarMonths().select(data.month).invoke("val").should("eq", "3");
    signUp.getCalendarYears().select(data.year).invoke("val").should("eq", data.year);
    signUp.getNewsletter().click().should("not.have.attr", "required");
    signUp.getOption().click().should("not.have.attr", "required");
    signUp.getAddressInfo().should("have.text", validationMessages.addressInfoText);
    signUp
      .getFirstName(data.firstName)
      .type(data.firstName)
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp
      .getLastName(data.lastName)
      .type(data.lastName)
      .should("contain.text", "")
      .and("have.attr", "required");
    signUp
      .getCompany(data.company)
      .type(data.company)
      .should("not.have.attr", "required");
    signUp
      .getAddressExampleText()
      .should(
        "have.text",
        validationMessages.addressExample
      );
    signUp.getAddress(data.address).type(data.address);
    signUp.getSecondAddress().should("not.have.attr", "required");
    signUp.getCountry().select(1).invoke("val").should("eq", data.country);
    signUp.getState(data.state).type("State").and("have.attr", "required");
    signUp.getZip(data.zip).type(data.zip).and("have.attr", "required");
    signUp.getCity(data.city).type(data.city).and("have.attr", "required");
    signUp
      .getPhoneNumber(data.mobilePhone)
      .type(data.mobilePhone)
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
    signUp.submitViewItem().click();
    signUp.visit("product_details/1");
    signUp.getFirstItemView().should("be.visible");
    signUp.getNew().should("be.visible");
    signUp.getNameofFirstItem().and("have.text", data.itemName);
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
    signUp.getCommentInput().type(validationMessages.successCheckoutText);
    signUp.submitPlaceOrder().click();
    signUp.visit("payment");
    signUp.getPaymentInfoInput().should("be.visible");
    signUp.getCardName().type(data.cardName);
    signUp.getCardNumber().type(data.cardNumber);
    signUp.getCardCvs().type(data.cardCvs);
    signUp.getCardCvs().trigger("keydown", { keyCode: 9 });
    signUp.getExpiryMonth().type(data.cardExperationMonth);
    signUp.getExpiryMonth().trigger("keydown", { keyCode: 9 });
    signUp.getExpiryYear().type(data.cardExperationYear);
    signUp.getPayButton().click();
    signUp.visit("payment_done/0");
    signUp.getOrderReplaced().should("have.text", "Order Placed!");
    signUp.getContinue().click();
    signUp.visit("login");
    signUp.sumbitDeleteAccount().click();
    signUp.visit("delete_account");
    signUp.getAccountDeleted().should("have.text", validationMessages.succesDeletedAccountText );
    signUp.getContinue().click();
    signUp.visit();
    signUp.getSignupLogin().click();
    signUp.visit("login");
      })

    Cypress.Commands.add('caruselCommands', (signUp, data) => { 
    signUp.visit();
    signUp.getButtons().should("be.visible");
    signUp.getAutomationIcon().then(($elem) => {
      expect($elem).to.contain(validationMessages.automationIconText);
      expect($elem).to.contain(
        validationMessages.caruselPanelFirstText
      );
      expect($elem).to.contain(
       validationMessages.caruselPanelSecondText
      );
    });
    signUp.getTestCases().should("be.visible").and("contain", validationMessages.testCasesText);
    signUp
      .getTestCases()
      .should("have.css", "background-color", data.greenColor);
    signUp
      .getTestCases()
      .realHover()
      .should("have.css", "background-color", data.orangeColor);
    signUp
      .getApi()
      .should("have.css", "background-color", data.greenColor)
      .and("contain", validationMessages.apiListText);
    cy.wait(7000);
    cy.get(".item").should("have.class", "active");
    signUp.getFirstCaruselItem().should("be.visible");

    signUp.getFirstItem().should("be.visible").and("contain", data.codeFirstItem);
    signUp
      .getFirstItem()
      .realHover()
      .should("have.css", "background-color", data.hoverColor);
  })

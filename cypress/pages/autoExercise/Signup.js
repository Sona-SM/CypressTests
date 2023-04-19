class SignUp {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }

  getSignupLogin(){
    return cy.get('.shop-menu > .nav > :nth-child(4) > a');
  }

  getUsername() {
    return cy.get('[data-qa="signup-name"]');
  }

  getSigninUsername (){
    return cy.get('[data-qa="name"]');
  }

  sumbitLoginButton(){
    return cy.get('[data-qa="login-button"]');
  }

  getEmail() {
    return cy.get('[data-qa="signup-email"]');
  }

  getSigninEmail(){
    return cy.get('[data-qa="login-email"]');
  }

  getPassword() {
    return cy.get('[data-qa="password"]');
  }

  getLoginPassword(){
    return cy.get('[data-qa="login-password"]');
  }

  getCalendarDays() {
    return cy.get('[data-qa="days"]');
  }

  getCalendarMonths() {
    return cy.get('[data-qa="months"]');
  }

  getCalendarYears() {
    return cy.get('[data-qa="years"]');
  }

  getNewsletter() {
    return cy.get("#newsletter");
  }

  getSecondAddress() {
    return cy.get('[data-qa="address2"]');
  }

  getCountry() {
    return cy.get('[data-qa="country"]');
  }

  getOption() {
    return cy.get("#optin");
  }

  getAddressExampleText() {
    return cy.get(":nth-child(14) > label");
  }

  getSuccesSignupText() {
    return cy.get(".col-sm-9 > :nth-child(2)");
  }

  getAddressInfo() {
    return cy.get("form > .title > b");
  }

  getFirstName() {
    return cy.get('[data-qa="first_name"]');
  }

  getLastName() {
    return cy.get('[data-qa="last_name"]');
  }

  getCompany() {
    return cy.get('[data-qa="company"]');
  }

  getGender() {
    return cy.get("#id_gender1");
  }

  getAddress() {
    return cy.get('[data-qa="address"]');
  }

  getState() {
    return cy.get('[data-qa="state"]');
  }

  getCity() {
    return cy.get('[data-qa="city"]');
  }

  getZip() {
    return cy.get('[data-qa="zipcode"]');
  }

  getPhoneNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  getContinue() {
    return cy.get('[data-qa="continue-button"]');
  }

  getButtons() {
    return cy.get(".shop-menu > .nav");
  }

  getLoggedin() {
    return cy.get(":nth-child(10) > a");
  }

  submitViewItem() {
    return cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    );
  }

  getQuantity() {
    return cy.get("#quantity");
  }

  getTestCases() {
    return cy.get(".active > :nth-child(1) > .test_cases_list > .btn");
  }

  getNew() {
    return cy.get(".newarrival");
  }

  getPlusWoman() {
    return cy.get(":nth-child(1) > .panel-heading > .panel-title > a > .badge");
  }

  getWoman() {
    return cy.get("#Women > .panel-body > ul");
  }

  getFirstItem() {
    return cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo"
    );
  }

  getTop() {
    return cy.get("#Women > .panel-body > ul > :nth-child(2) > a");
  }

  getApi() {
    return cy.get(".active > :nth-child(1) > .apis_list > .btn");
  }

  submitAddToCard() {
    return cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
  }

  getAdded() {
    return cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
  }

  getPopupWindow() {
    return cy.get(".modal-content");
  }

  getContinueShopping() {
    return cy.get(".modal-footer > .btn");
  }

  getCardDelete() {
    return cy.get(".cart_quantity_delete");
  }

  getEmptyCard() {
    return cy.get("#empty_cart > .text-center");
  }

  getProceedCheckout() {
    return cy.get(".col-sm-6 > .btn");
  }

  getAddressDelivery() {
    return cy.get("#address_delivery");
  }

  submitPlaceOrder() {
    return cy.get(":nth-child(7) > .btn");
  }

  submit() {
    return cy.get('[data-qa="signup-button"]');
  }

  submitCreate() {
    return cy.get('[data-qa="create-account"]');
  }

  sumbitDeleteAccount() {
    return cy.get(".shop-menu > .nav > :nth-child(5) > a");
  }

  getFirstItemView() {
    return cy.get(".col-sm-9");
  }

  getNameofFirstItem() {
    return cy.get(".product-information > h2");
  }

  getFirstCaruselItem() {
    return cy.get(
      "#slider-carousel > .carousel-inner > .active > :nth-child(2)"
    );
  }

  getIteminCart() {
    return cy.get("#product-1");
  }

  getPaymentInfoInput() {
    return cy.get(".payment-information > .row > :nth-child(2)");
  }
  getCardName() {
    return cy.get('[data-qa="name-on-card"]');
  }

  getCardNumber() {
    return cy.get('[data-qa="card-number"]');
  }

  getCardCvs() {
    return cy.get('[data-qa="cvc"]');
  }

  getCommentInput() {
    return cy.get(".form-control");
  }

  getCategoryofClothes() {
    return cy.get("#accordian");
  }

  getExpiryMonth() {
    return cy.get('[data-qa="expiry-month"]');
  }

  getExpiryYear() {
    return cy.get('[data-qa="expiry-year"]');
  }

  getPayButton() {
    return cy.get('[data-qa="pay-button"]');
  }

  getOrderReplaced() {
    return cy.get('[data-qa="order-placed"] > b');
  }

  getAccountDeleted() {
    return cy.get("b");
  }
  
  generateRandomName(length, email = "") {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

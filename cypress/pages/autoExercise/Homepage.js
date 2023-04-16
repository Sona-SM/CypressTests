class Homepage {
    visit() {
      cy.visit("https://automationexercise.com/");
    }
    //Get the Home button element and click it
    getHomeButton(value) {
      return cy.get("fa fa-home").type(value);
    }
  
    //Get the Products button element and click it
    getProducts(value) {
      return cy.get("[material-icons card_travel]").type(value);
    }
    //Get the Cart button and click it
    getCart(value) {
      return cy.get("fa fa-shopping-cart").type(value);
    }
  }
  
  
    export const homePage = new Homepage();
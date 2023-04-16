describe("Homepage and Icons", () => {
    it("Loads the homepage and checks for icons", () => {
      cy.visit(Cypress.env('globalUrl'));
      cy.get(".shop-menu").click;
      cy.url().should('include','/')
   
      })
    });
    
  it("Loads the Products and check for icons", () => {
    cy.visit(Cypress.env('globalUrl')+'products');
    cy.get(".shop-menu > .nav > :nth-child(2)").click;
    cy.url().should('include','products')
    cy.get('.logo').find('img').should('have.attr', 'src').should('include','/static/images/home/logo.png')
  });
  
  it("Loads the Cart", () => {
    cy.visit("https://automationexercise.com/view_cart");
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click;
  });
  
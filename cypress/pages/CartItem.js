import { AddresInfo } from "../../Utils/addressInfo"
import { validcard } from "../../Utils/ValidAccountData"

class Cartitems {

  Added_Modal(){
    cy.get('.modal-content').should('contain', 'Added')
        .and('contain', 'Your product has been added to cart.')
        .and('contain', 'View Cart' )
        .and ('contain', 'Continue Shopping')  
  }  

  getCheckoutbutton (){
    cy.get('.col-sm-6 > .btn').should('be.visible')
      .and('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box')
      .and('contain', 'Proceed To Checkout').click()
  }


CheckoutModal(){ 
  cy.get('.modal-content').should('have.css', 'padding', '20px')
  .and('have.css','border-radius', '5px' ) 
  .and('contain', 'checkout')
  .and ('contain', 'Register / Login account to proceed on checkout.')
  .and('contain', 'Register / Login')
  cy.get('.modal-footer > .btn').should('be.visible')

}
  
  checkoutPage(){
    cy.get('#cart_items').should('contain', 'Address Details')
    cy.get('#address_delivery > .address_firstname').should('contain', AddresInfo.firstName + ' '+ AddresInfo.lastName)
    cy.get('#address_delivery > :nth-child(3)').should('contain', AddresInfo.company)
    cy.get('#address_delivery > :nth-child(4)').should('contain', AddresInfo.address)
    cy.get('#address_delivery > :nth-child(5)').should('contain', AddresInfo.address2)
    cy.get('#address_delivery > .address_city').should('contain', AddresInfo.city)
      .and('contain', AddresInfo.state)
      .and('contain', AddresInfo.zip)
    cy.get('#address_delivery > .address_country_name').should('contain', AddresInfo.country )
    cy.get('#address_delivery > .address_phone').should('contain', AddresInfo.phone)
 
    cy.get('#address_invoice')
    cy.get('#address_delivery > .address_firstname').should('contain', AddresInfo.firstName + ' '+ AddresInfo.lastName)
    cy.get('#address_delivery > :nth-child(3)').should('contain', AddresInfo.company)
    cy.get('#address_delivery > :nth-child(4)').should('contain', AddresInfo.address)
    cy.get('#address_delivery > :nth-child(5)').should('contain', AddresInfo.address2)
    cy.get('#address_delivery > .address_city').should('contain', AddresInfo.city)
      .and('contain', AddresInfo.state)
      .and('contain', AddresInfo.zip)
    cy.get('#address_delivery > .address_country_name').should('contain', AddresInfo.country )
    cy.get('#address_delivery > .address_phone').should('contain', AddresInfo.phone)

    cy.get(':nth-child(4) > .heading').should ('contain', 'Review Your Order')
    cy.get('.cart_product > a > img').should('exist')
    cy.get('label').should('contain', 'If you would like to add a comment about your order, please write it in the field below.').should('be.visible')
    cy.get('.form-control').should('exist')
    cy.get(':nth-child(7) > .btn').should('be.visible')
    .and('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box', 'padding', '5px 15px')
    }

    getPay (){
      cy.get('[data-qa="name-on-card"]').type(validcard.cardname)
      cy.get('[data-qa="card-number"]').type(validcard.cardnumber)
      cy.get('[data-qa="cvc"]').type(validcard.cvc)
      cy.get('[data-qa="expiry-month"]').type(validcard.expmonth)
      cy.get('[data-qa="expiry-year"]').type(validcard.expyear)
      cy.get('[data-qa="pay-button"]').should('be.visible')
      .and('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box', 'margin-top', '16px')
    }
}

export const cartItems = new Cartitems
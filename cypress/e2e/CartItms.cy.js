import { signup } from "../../PageObjects/AutomationExersizes/SignUp"
import { cartItems } from "../../PageObjects/AutomationExersizes/Cartitems"
import { AddresInfo } from "../../Utils/addressInfo"
import { signin } from "../../PageObjects/AutomationExersizes/singnIn"
import { messages } from "../../Utils/messages"

let productName, productCost, productQuantity 

describe ('Add items to cart from Home Page', () => {
    it ('Add items in cart and try to checkout, when Logged out', () => {

    signup.visit() 
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cartItems.Added_Modal()
    cy.get('.modal-footer > .btn').click()
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2')
        .invoke('text')
        .then(($cost) => {
        productCost = $cost
    })
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
        .invoke('text')
        .then(($Name)=>{
            productName = $Name
    })
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('.product_image').should("be.exist");
    cy.then (()=> {
        cy.get('h4 >a').should('contain', productName)
    })
    cy.then (()=> {
        cy.get('.cart_price > p').should('contain', productCost)
    }) 
    cartItems.getCheckoutbutton()
    cartItems.CheckoutModal()
    })


    it ('Add items to the cart and checkout when logged in', () => {
        signup.visit() 
        signin.signin()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cartItems.Added_Modal()
    cy.get('.modal-footer > .btn').click()
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2')
        .invoke('text')
        .then(($cost) => {
        productCost = $cost
    })
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
        .invoke('text')
        .then(($Name)=>{
            productName = $Name
    })
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('.product_image').should("be.exist");
    cy.then (()=> {
        cy.get('h4 >a').should('contain', productName)
    })
    cy.then (()=> {
        cy.get('.cart_price > p').should('contain', productCost)
    }) 
    cartItems.getCheckoutbutton()
    cy.then (()=> {
        cy.get('h4 >a').should('contain', productName)
    })
    cy.then (()=> {
        cy.get('.cart_price > p').should('contain', productCost)
    }) 
    cartItems.checkoutPage()
    cy.get(':nth-child(7) > .btn').click()
    cartItems.getPay()
    cy.get('[data-qa="pay-button"]').click()
    cy.wait(3000)
    cy.url().should('include', 'payment_done')
    cy.contains (messages.paydone)
    
    })
    }) 
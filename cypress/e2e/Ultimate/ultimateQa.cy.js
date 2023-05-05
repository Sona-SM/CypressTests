import { mainPage } from "../../pages/pages";
import { data } from "../../utils/data";

let sumOfNumber, firstNumber, secondNumber
describe('Tests for Automation Ultimate QA', () => {
 
    it('Validate the webpage with valid inputs', () => {
        cy.visit(Cypress.env("globalUrl"))
        cy.viewport(1920 * 1, 1080 * 1)
        mainPage.getBigPage().click()
        mainPage.getCloseSignUp().click()
        mainPage.getButton().eq(1).realHover().then(($element)=>{
            cy.wrap($element)
            .invoke('css', 'background-color')
            .then(background => {
                cy.log(background)
                expect($element).to.have.css("background-color",background)
            })
        mainPage.getSectionButtons().should('be.visible')  
        mainPage.getSocialMedia().should('be.visible')
        mainPage.getSocialField().should('be.visible')
        mainPage.getRegistrationField().should('be.visible')
        mainPage.getContents().should('be.visible')
        mainPage.getName().type(data.name)
        mainPage.getEmailInput().type(data.email)
        mainPage.getMessageInput().type(data.message)
        sumOfNumber = firstNumber + secondNumber
    });
});
})
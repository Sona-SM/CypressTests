import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { dynamicpage } from "../../pages/dynamic";
import { data } from "../../pages/dynamic";
import { texts } from "../../pages/dynamic";

Given("I am on the Elements page", ()=>{
    dynamicpage.visit("dynamic-properties")
 })

  When("I click on Dynamic Properties", ()=>{ 
   dynamicpage.submitDynamicProperties().click()
 })

 Then('Dynamic Properties page should be opened', ()=>{
    dynamicpage.visit("dynamic-properties")
    dynamicpage.getEnable().should(data.visible).and(texts.haveCss, data.backgroundColor, data.color)
    dynamicpage.getEnable().should(data.visible).and(texts.haveText, texts.enableText)
    dynamicpage.getColorChange().should(data.visible).and(texts.haveCss, data.backgroundColor, data.color)
    cy.wait(5000)
    dynamicpage.getEnable().should(data.visible).and(texts.haveCss, data.backgroundColor,data.color)
    dynamicpage.getVisible().should(data.visible).and(texts.haveText, texts.visibleText)
    dynamicpage.getVisible().should(data.visible).and(texts.haveCss, data.backgroundColor,data.color)
})

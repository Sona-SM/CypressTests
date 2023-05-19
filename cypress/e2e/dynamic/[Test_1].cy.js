import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { dynamicpage } from "../../pages/dynamic";
import { data } from "../../pages/dynamic";

Given("I am on the main page", ()=>{
    dynamicpage.visit()
 })
 When("I click on the Elements button", ()=>{
  dynamicpage.submitELements().click();
 })
 Then("The dropdown of Elements field should be opened", ()=> {
  dynamicpage.submitDynamicProperties().should('exist').contains(data.dynamicText);
 })



 

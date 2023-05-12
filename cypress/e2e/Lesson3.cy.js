import { signupPage } from "../pages/Signup";
import { validationMessages } from "../utils/messages";
import {data} from "../utils/data"

describe("SignUp with valid data", () => {
  it("Verify signup functionality with valid credentials", () => {
    cy.visit(Cypress.env("globalUrl"))
    cy.viewport(1920 * 1, 1080 * 1)
    signupPage.getLogo().should('be.visible')
    signupPage.getFirstLineName().should("have.text", data.firstLineName)
    signupPage.getAddButton().click()
    signupPage.getRegistrationFormTitle().should('be.visible')
    signupPage. getFirstName().type(data.firstName)
    signupPage.getLastName().type(data.lastName)
    signupPage.getEmail().type(data.email)
    signupPage.getAge().type(data.age)
    signupPage. getSalary().type(data.salary)
    signupPage.getDepartment().type(data.department)
    signupPage.submitSubmitButton().click()
    signupPage.getNewAddedUser().should('be.visible').and("have.text", data.newAdded)
    signupPage.getEditAddedUSer().click()
    signupPage.getEditForm().should('be.visible').and("have.text", data.editFormTitle)
  });

})
class MainPage {
    visit(){
        cy.visit('https://ultimateqa.com/automation/')
    }
    getBigPage(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(1) > a')
    }
    getCloseSignUp(){
        return cy.get('.formkit-close');
    }
    getButton(){
        return cy.get(".et_pb_button");
    }
    getSectionButtons(){
        return cy.get('#Section_of_Buttons');
    }
    getSocialMedia(){
        return cy.get('#Section_of_Social_Media_Follows');
    }
    getSocialField(){
        return cy.get('.et_pb_row_4');
    }
    getRegistrationField(){
        return cy.get('.et_pb_row_6');
    }
    getContents(){
        return cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i')
    }
    getName(){
        return cy.get('#et_pb_contact_name_0');
    }
    getEmailInput(){
        return cy.get('#et_pb_contact_email_0');
    }
    getMessageInput(){
        return cy.get('#et_pb_contact_message_0');
    }
}

export const mainPage = new MainPage();  
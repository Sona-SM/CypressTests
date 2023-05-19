class dynamicPage{
    visit(){
        cy.visit ('https://demoqa.com/dynamic-properties')
    }

    submitELements(){
        return cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text')
    }
    submitDynamicProperties(){
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-8')
    } 
    getEnable(){
        return cy.get('#enableAfter')
    }
    getColorChange(){
        return cy.get('#colorChange')
    }
    getVisible(){
        return cy.get('#visibleAfter')
    }
}
const data = {
dynamicText: "Dynamic Properties",
visible: "be.visible",
backgroundColor: "background-color",
color: 'rgb(0, 123, 255)'
}

const texts = {
enableText: "Will enable 5 seconds",
visibleText: "Visible After 5 Seconds",
haveText: "have.text",
haveCss: "have.css"
}
    
export const dynamicpage = new dynamicPage
export {data, texts}    
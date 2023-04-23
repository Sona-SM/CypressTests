let numberCountPolo, number

describe('Brands and Searching', () => {
    it('check if all items available for every brand', () => {

        cy.visit('https://automationexercise.com/')
        cy.get('ul>li').each(($el, index, $list) => {
            expect($list).to.have.length(57)
        });
        cy.get('.left-sidebar > h2').should("contain", "Category")
        cy.get('[data-parent="#accordian"]').eq(0).click();
        cy.get('#Women > .panel-body').then(($el) => {
            expect($el).to.contain("Dress")
            expect($el).to.contain("Tops")
            expect($el).to.contain("Saree")
        })
        cy.get('.nav > :nth-child(1) > a > .pull-right').invoke('text').then(($el) => {
            numberCountPolo = $el
             number= parseInt(numberCountPolo.slice(1, 2))
            cy.log(typeof(number))
        })

        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.product-overlay').each(($el, index, $list) => {
            expect($list).to.have.length(number)
        });

        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.overlay-content > p').then(($el) => {
            if ($el.text().includes("Polo")) {
                cy.log($el.length)
              } else {
               cy.log("errorMessage") 
              }

            })
        cy.get('.overlay-content > p').should("contain", "Polo")
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p').should("contain", "Polo")
        })
    })
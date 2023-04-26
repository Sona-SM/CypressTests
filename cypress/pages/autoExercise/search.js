class MainPage {
    visit(){
        cy.visit('https://automationexercise.com/');
    }
    
    getAllitems(){
        return cy.get('ul>li');
    }
    getCategory(){
        return cy.get('.left-sidebar > h2');
    }
    getAllCategories(){
        return cy.get('[data-parent="#accordian"]');
    }
    getWomanCategoryItems(){
        return cy.get('#Women > .panel-body');
    }
    getManCategoryItems(){
        return cy.get('#Men > .panel-body');
    }
    getKidsCategoryItems(){
        return cy.get('#Kids > .panel-body');
    }
    getFirstBrandCount(){
       return cy.get('.nav > :nth-child(1) > a > .pull-right');
    }
    sumbitFirstBrandPage(){
        return cy.get('.brands-name > .nav > :nth-child(1) > a');
    }
    getItemHovering(){
        return cy.get('.product-overlay');  
    }
    getItemParagragh(){
        return cy.get('.overlay-content > p');
    }
    getPoloItem(){
        return cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p') 
    }
    getSecondBrandCount(){
        return cy.get(':nth-child(2) > a > .pull-right')
    }
    sumbitSecondBrandPage(){
        return cy.get('.brands-name > .nav > :nth-child(2) > a');
    }
    getHMitem(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
    }
    getThirdBrandCount(){
        return cy.get(':nth-child(3) > a > .pull-right')
    }
    submitThirdBrandPage(){
        return cy.get('.brands-name > .nav > :nth-child(3) > a');
    }
    getMadamItem(){
        return cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p')
    }
    getFourthBrandCount(){
        return cy.get(':nth-child(4) > a > .pull-right')
    }
    submitFourthBrandPage(){
        return cy.get('.brands-name > .nav > :nth-child(4) > a')
    }
    getMastItem(){
        return cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p')
    }
    getSearchInput(){
        return cy.get('#search_product');
    }
    sumbitProductsPage(){
        return cy.get('.shop-menu > .nav > :nth-child(2) > a');
    }
    submitSearchButton(){
        return cy.get('#submit_search');
    }
    getSerachResultItem(){
        return cy.get('.productinfo > p');
    }
    getRecommandedItems(){
        return cy.get('.recommended_items > .title');
    }
    getRecommandedItemsPanel(){
        return cy.get('.recommended_items');
    }
    getSubsribeEmail(){
        return cy.get('#susbscribe_email');
    }
    submitSubscribeButton(){
        return cy.get('#subscribe');
    }
    getSuccessAlert(){
        return cy.get('.alert-success');
    }
    getEmptyPage(){
        return cy.get('section[style="height: auto !important;"] > .container > .row');
    }
    getCaruselFirstItem(){
       return cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo');
    }
    getCaruselFirstItemText(){
        return cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > p')
    }
    getEmptyCart(){
        return cy.get('b');
    }
    sumbitEmptyCartHere(){
        return cy.get('u');
    }
    getNavigateCart(){
        return cy.get('.shop-menu > .nav > :nth-child(3) > a');
    }
    submitVideoTutorials(){
        return cy.get('.shop-menu > .nav > :nth-child(7) > a');
    }
}

export const mainPage = new MainPage();
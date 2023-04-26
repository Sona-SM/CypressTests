import { mainPage } from "../pages/autoExercise/search";
import { messagesTexts } from "../utils/messages";

let numberCountPolo, number, numberCountHM, numberCountMadam, numberCountMast
Cypress.Commands.add("brandsCommands", (mainPage) => {
    mainPage.getAllitems().each(($el, index, $list) => {
        expect($list).to.have.length(57);
      });
      mainPage.getCategory().should("contain", messagesTexts.itemsCategory);
      mainPage.getAllCategories().eq(0).click();
      mainPage.getWomanCategoryItems().then(($el) => {
        expect($el).to.contain(messagesTexts.womanFirstCategory);
        expect($el).to.contain(messagesTexts.womanSecondCategory);
        expect($el).to.contain(messagesTexts.womanThirdCategory);
      });
      mainPage.getAllCategories().eq(1).click();
      mainPage.getManCategoryItems().then(($el) => {
        expect($el).to.contain(messagesTexts.manFirstCategory);
        expect($el).to.contain(messagesTexts.manSecondCategory);
      });
      mainPage.getAllCategories().eq(2).click();
      mainPage.getKidsCategoryItems().then(($el) => {
        expect($el).to.contain(messagesTexts.kidsFirstCategory);
        expect($el).to.contain(messagesTexts.kidsSecondCategory);
      });
  
      mainPage
        .getFirstBrandCount()
        .invoke("text")
        .then(($el) => {
          numberCountPolo = $el;
          number = parseInt(numberCountPolo.slice(1, 2));
          cy.log(typeof number);
        });
  
      mainPage.sumbitFirstBrandPage().click();
      mainPage.getItemHovering().each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      mainPage.getItemParagragh().then(($el) => {
        if ($el.text().includes(messagesTexts.firstItemName)) {
          cy.log($el.length);
        } else {
          cy.log(messagesTexts.noItemError);
        }
      });
      mainPage.getItemParagragh().should("contain", messagesTexts.firstItemName);
      mainPage.getPoloItem().should("contain", messagesTexts.firstItemName);
  
      mainPage
        .getSecondBrandCount()
        .invoke("text")
        .then(($el) => {
          numberCountHM = $el;
          number = parseInt(numberCountHM.slice(1, 2));
          cy.log(typeof number);
        });
  
      mainPage.sumbitSecondBrandPage().click();
      mainPage.getItemHovering().each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      mainPage.getItemParagragh().then(($el) => {
        if ($el.text().includes(messagesTexts.secondItemName)) {
          cy.log($el.length);
        } else {
          cy.log(messagesTexts.noItemError);
        }
      });
      mainPage.getItemParagragh().should("contain", messagesTexts.secondItemName);
      mainPage.getHMitem().should("contain", messagesTexts.secondItemName);
  
      mainPage
        .getThirdBrandCount()
        .invoke("text")
        .then(($el) => {
          numberCountMadam = $el;
          number = parseInt(numberCountMadam.slice(1, 2));
          cy.log(typeof number);
        });
  
      mainPage.submitThirdBrandPage().click();
      mainPage.getItemHovering().each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      mainPage.getItemParagragh().then(($el) => {
        if ($el.text().includes(messagesTexts.thirdItemName)) {
          cy.log($el.length);
        } else {
          cy.log(messagesTexts.noItemError);
        }
      });
      mainPage.getItemParagragh().should("contain", messagesTexts.thirdItemName);
      mainPage.getMadamItem().should("contain", messagesTexts.thirdItemName);

      mainPage
        .getFourthBrandCount()
        .invoke("text")
        .then(($el) => {
          numberCountMast = $el;
          number = parseInt(numberCountMast.slice(1, 2));
          cy.log(typeof number);
        });
  
      mainPage.submitFourthBrandPage().click();
      mainPage.getItemHovering().each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      mainPage.getItemParagragh().then(($el) => {
        if ($el.text().includes(messagesTexts.fourthItemName)) {
          cy.log($el.length);
        } else {
          cy.log(messagesTexts.noItemError);
        }
      });
      mainPage.getItemParagragh().should("contain", messagesTexts.fourthItemName);
      mainPage. getMastItem().should("contain", messagesTexts.fourthItemName);
      mainPage.sumbitProductsPage().click();
      mainPage.getSearchInput().should('be.visible');
      mainPage.getSearchInput().type(messagesTexts.fourthItemName).trigger('keydown', {key: 'Enter',});
      mainPage.getSearchInput().should("not.contain", messagesTexts.notWorkingEnter);
      mainPage.submitSearchButton().click();
      mainPage.getSerachResultItem().should('be.visible');
      mainPage.getSearchInput().clear();
      mainPage.getSearchInput().type(messagesTexts.notExistedItem);
      mainPage.submitSearchButton().click();
      mainPage.getEmptyPage().should('not.exist');
      mainPage.visit();
      cy.scrollTo('bottom');
      mainPage.getRecommandedItems().should('be.visible').and("have.text", messagesTexts.recommandedItemsText);
      mainPage.getRecommandedItemsPanel().should('be.visible');
      mainPage.getSubsribeEmail().type(messagesTexts.subsribeEmail);
      mainPage.submitSubscribeButton().click();
      mainPage.getSuccessAlert().should('be.visible', messagesTexts.getSuccessAlert);
      mainPage.getCaruselFirstItem().should('be.visible');
      mainPage.getCaruselFirstItemText().should("have.text", messagesTexts.caruselFirstItemText);
      cy.wait(7000);
      mainPage.getCaruselFirstItem().should('be.visible');
      mainPage.getCaruselFirstItemText().should("have.text", messagesTexts.caruselSecondItemText);
      cy.scrollTo('bottom');
      mainPage.getNavigateCart().scrollIntoView();
      mainPage.getNavigateCart().click();
      mainPage.getEmptyCart().should('be.visible');
      mainPage.getEmptyCart().should("have.text", messagesTexts.emptyCart);
      mainPage.sumbitEmptyCartHere('u').click();
      mainPage.visit("products")
      mainPage.submitVideoTutorials().click();
      cy.visit("www.youtube.com/c/AutomationExercise")
      });

import { mainPage } from "../pages/autoExercise/search";
import { messagesTexts } from "../utils/messages";

describe("Brands and Searching", () => {
  it("check if all items available for every brand", () => {
    mainPage.visit();
    cy.brandsCommands(mainPage);
});
});

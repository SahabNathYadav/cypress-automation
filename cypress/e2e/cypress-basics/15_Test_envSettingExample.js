/// <reference types='cypress' />

describe("Using env", () => {
  it("Sets env variables in cypress.config.js file and reads them from there in test", () => {
   
    //We will get the base url from cypress.config.js file
    // after changing config file, restart the cypress runner
    cy.visit(Cypress.env("url")+"/seleniumPractise/#/");
    cy.pause();

    //selenium's get hit url in browser, cypress's get acts like findElement of selenium

    cy.get("input.search-keyword").type("ca");

    cy.wait(2000);

    //Below is parent child chaining with aliasing

    cy.get(".products").as("productLocator");

    // Instead of getting the item by index, we should get by Displayed name.
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        let productName = $el.find(".product-name").text();

        if (productName.includes("Cashews")) {
          cy.log("Selected product: " + productName);
          cy.wrap($el).find("button").click();
        }
      });
  });
});

/// <reference types="cypress" />

describe('My Second Test', () => {
    it('Selects product, adds to cart and places order', () => {

      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

      //selenium's get hit url in browser, cypress's get acts like findElement of selenium

      cy.get('input.search-keyword').type('ca');

      cy.wait(2000);

      //Below is parent child chaining with aliasing

      cy.get('.products').as('productLocator');
      

      // Instead of getting the item by index, we should get by Displayed name. 
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        let productName = $el.find('.product-name').text();

        if (productName.includes('Cashews')){
            cy.log("Selected product: "+productName);
            cy.wrap($el).find('button').click();
        }   
      }); 

      cy.get('.cart-icon > img').click();

      //cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();

      // Above operation can be achieved by simply calling conatins.
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();

    })

  })
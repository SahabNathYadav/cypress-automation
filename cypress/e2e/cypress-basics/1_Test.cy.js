/// <reference types="cypress" />

describe('My First Test', () => {
    it('Launches app url in browser', () => {
      expect(true).to.equal(true)
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

      //selenium's get hit url in browser, cypress's get acts like findElement of selenium

      cy.get('input.search-keyword').type('ca');

      cy.wait(2000);
      //get the visible products and assert the number of products count. 
      //We can use either visible property or we can use parent > child relation to get only the required products.
      // Below adding :visible is jquery way 
      cy.get('.product:visible').should('have.length', 4);

      //Below is from parent node to child node

      cy.get('.products >.product').should('have.length', 4);

      // Use parent child chaining using find() method

      cy.get('.products').find('.product').should('have.length',4);

      
      //get the 4th product of this selection and assert the price
      cy.get('.products > :nth-child(4) >.product-price').should('contain', 650);

      //add the 4th product to the cart. Here it gets the product by index using eq method
      cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click();

      // Instead of getting the item by index, we should get by Displayed name. 
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const productName = $el.find('.product-name').text();
        cy.log(productName);
        //cy.pause();
        //cy.log($list.length);
        //cy.log(index);

        if (productName.includes('Capsicum')){
            cy.wrap($el).find('button').click();
        }   
      }); // end of each function call

      // To assert that if logoElement's text is correctly displayed. 
      // Here we have used chai's should() which automatically takes care of promises
      cy.get('.container .brand').should('have.text', 'GREENKART');

      // Below code we are handling the promise using then. 
      //this is to print in log
      cy.get('.brand').then((logoElement)=>{
        cy.log(logoElement.text());
      }) 

      // Below code does not work because get is cyprass command and text is not cypress command so promise is not handled and throws error.
      //cypress also supports jquery methods and text() is jquery method
      //cy.get('.brand').text()


      // alias is same in Cypress as we have locators stored in other frameworks
      cy.get('.products').as('productLocator');
      cy.get('@productLocator').find('.product').should('have.length',4);

    
    })


  
  /*   it('Clicking on type opens a new url', () => {
        cy.visit('https://example.cypress.io')
      
        cy.contains('type').click();

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
      */
  })
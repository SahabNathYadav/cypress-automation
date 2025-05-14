/// <reference types='cypress' />

// Using fixtures, we can provide data to script from some external file stored in json format.
// This file should be under fixtures folder.
// call this fixtures in your test

describe('Test to add product using fixtures', () =>{

    //All the data part should be kept outside any test so that it can be available to all the tests in file.
    // We dont need to hardcode or staore in this test. We can get data from fixtures.
    // But we have to resolve the promise and assign the data to some variable to make it globally available in this file
    let data;
    before(() =>{
        //Before function runs once before all tests in describe block
        cy.fixture('example').then((value) =>{
              data = value;
              //this.data = value;
         })
    })
    
    it('Submit order', () => {
    
        const prodName =  data.productName;
        cy.visit(data.practiceUrl);
        //Now we can replace the below line with data object
        //cy.get('#username').type('rahulshettyacademy');
        //cy.get('#password').type('learning');
        cy.get('#username').type(data.username);
        cy.get('#password').type(data.password);
        cy.contains('Sign In').click();

        //validate that next page is loaded
        cy.contains('Shop Name').should('be.visible');

        //check the product cards
        cy.get('app-card-list app-card').should('have.length', 4);

        // use filter to select a product. This is another way to choose a product frpm a list
        // in gilter pass contains jQuery, here we have used prodName in the expression
        cy.get('app-card-list app-card').filter(`:contains(${prodName})`) 
        //apply chanin, it returns a promise. resolve it using then.
            .then(($el) => {
                cy.wrap($el).should('have.length', 1);
                // in contains method we tell that in the element ther is button with text 'Add'
                cy.wrap($el).contains('button', 'Add').click();
            
            })

        //    add another product say 1st by default
        cy.get('app-card-list app-card').eq(0).contains('button', 'Add').click();
        // we can use this code or contains also
        //cy.get('a.btn-primary').click();
        // we can use contains as earlier we used
        cy.contains('a','Checkout').click();

        // sum the total ammount of each product and assert that its below 200000
        let totalAmount = 0
        cy.get('table tbody tr td:nth-child(4) strong').each(($el) => {
            // This is different than filter which returns promise, but it is already is an element locator
            // We have to get text which contains word and number, so , separate the number by ' ' where 1 element will be number string
            // Convert string number into a number value
             const amount = Number($el.text().split(' ')[1].trim())
             totalAmount = totalAmount + amount;
             cy.log('totalAmount inside loop: '+totalAmount);
        }) // but in order to get this totalAmount out side, we need to resolve teh promise 
        // Because cyspress code is async, amount calculation ,ogin written above and assert done in below is not cypress. 
        // it's javascript and chai/mocha , so we need to resolve promises so that it execute in synchronous mode
        // starting with cy. are cypress commands and auto resolved
        .then(() =>{
            cy.log('totalAmount outside loop: '+totalAmount);
            expect(totalAmount).to.be.lessThan(200000);
        })

        cy.contains('button', 'Checkout').click();
        cy.get('input#country').type('India');
        //Set default timeout for thsi test
        //Cypress.config('defaultCommandTimeout',10000);
        cy.wait(5000);
        cy.get('div.suggestions ul li').click();
        //cy.get('input[type="submit"]').click();
        cy.get('input.btn-success').click();
        cy.get('div.alert-success').should('contain','Success');
    })

})
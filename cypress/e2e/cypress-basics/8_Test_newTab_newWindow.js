/// <reference types='cypress' />

describe('Test new window/ new Tab', () => {
    it('Tests new window or new Tab functionality in cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cy.visit(Cypress.env('url')+'/AutomationPractice/');

        // There are two ways to open a new Tab / window in cypress
        // Cypress directly does not support, so we are using work around using jQuery
        // First as in 5th Test, we removed attribute target and used origin to redirect to new tab url
        // Second we can use jQuery prop() method that will return us attribute value that we will click using origin()
        // since prop() is non-cypress method so we have to resolve promises.

        cy.get('#opentab').then((el) => {
            //below code will return 'href' property's value
            const url = el.prop('href');
            cy.log('url: '+url);

            cy.visit(url);

            //since its new domain url so, cypress will not support any operation on this page.
            //So below code throws error and we have to use jQuery origin() to tell cypress that we are using thsi new domain url.

            //cy.get('#navbarSupportedContent a[href*="about"]').click();

            cy.origin(url, () => {
                cy.get('#navbarSupportedContent a[href*="about"]').click();
                //cy.get('.mt-50').should('contain','Welcome to QAClick Academy');
                cy.get('.mt-50').should('contain','Welcome to QAClick Academy ');
                cy.get('.breadcrumb').should('contain','About Us');
            })

        })
    })
})
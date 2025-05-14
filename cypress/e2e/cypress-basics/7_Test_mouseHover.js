/// <reference types='cypress' />

describe('Test Mouse over', () => {
    it('Test for mouse over functionality', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //We will use show() method of jQuery to show all the hidden and selected elemensts
        // This method display the hidden element which use CSS display:none property
        cy.get('.mouse-hover div.mouse-hover-content').invoke('show');
        //cy.get('.mouse-hover .mouse-hover-content').contains('Top').click();
        cy.contains('Top').click();
        cy.url().should('include', 'top');

        cy.wait(2000);

        cy.contains('Reload').click();
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/');

        // Even cypress can click hidden element forcefully. so if we comment below line and click forcefully, it will work
        // cy.get('.mouse-hover div.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include', 'top');

    })
})
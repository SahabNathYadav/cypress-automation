/// <reference types='cypress' />

describe('Test the new tab in cypress', () => {
    it('Tests that new tab opens when on click of a button/href, redirects to new page in new tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cypress supports new tab in different ways. It modifies the html code to stop in new tab and clicks on button then to continue.
        //In below scenario, below is the html code
        // <a id="opentab" class="btn-style class1 class2" href="https://www.qaclickacademy.com" target="_blank">Open Tab</a>
        // Here target="_blank" is the code which opens in new tab and through cypress we will remove this attribute and proceed.
        // invoke method is used to call the jquey to remove the attribute. here method to remove is removeAttr()

        cy.wait(2000);
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        //Since cypress does not support cross domain, means in abov ecase it opens in new tab and new url. 
        //So we need to tell cypress about new url through a method and do all the operations in that scope only.

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click();
            //cy.get('.mt-50').should('contain','Welcome to QAClick Academy');
            cy.get('.mt-50').should('contain','Welcome to QAClick Academy ');
            cy.get('.breadcrumb').should('contain','About Us');
        })
    })
})
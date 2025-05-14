/// <reference types='cypress' />
/// <reference types='cypress-iframe' />

// Above code helps in auto suggestion while writing code and calling methods of iframe

// Cypress directly does not support iFrame, so we have to use work aroound. 
// First of all install iFrame plugin. Go to your project root folder and then in terminal run below command
// npm install -D cypress-iframe
// import this in your test. We can see that iframe has been added in your package.json file

import 'cypress-iframe';

describe('Test for iframe in Cypress', () => {
    it('Tests the iframe embedded in main page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       
        cy.frameLoaded('#courses-iframe');
         // Switch to iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();

    })
})



/// <reference types="cypress" />

describe('Test for alert and other elements', () => {
    it ('Tests alert and other functionalities', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        cy.get('input#confirmbtn').click();

        //firing the event using code and asserting the message
        cy.on('window:alert', (str) => {
            expect(str).equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm', (str) => {
            expect(str).equal('Hello , Are you sure you want to confirm?');
        })
    })
})
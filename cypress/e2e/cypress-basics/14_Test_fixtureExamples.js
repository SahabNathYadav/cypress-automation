/// <reference types='cypress' />

import data from '../../fixtures/example.json';

const testData = require('../../fixtures/example.json')

describe('Test to login using fixtures', () =>{

    it('Login to website using imported data from example.json', () => {

        cy.visit(data.practiceUrl);
        cy.log("Data is used which was imported from example.json file")
        cy.get('#username').type(data.username)
        cy.get('#password').type(data.password);
        cy.contains('Sign In').click();

        //validate that next page is loaded
        cy.contains('Shop Name').should('be.visible');
    })

    it('Login to website using data imported using require from example.json', () => {

        cy.visit(testData.practiceUrl);

        cy.log('testData is used which got available in this file using require(example.json) method ')
       
        cy.get('#username').type(testData.username)
        cy.get('#password').type(testData.password);
        cy.contains('Sign In').click();

        //validate that next page is loaded
        cy.contains('Shop Name').should('be.visible');
    })
})
/// <reference types="cypress" />

describe('Test checkbox, selct',()=>{
    it('Test the checkbox, static select, dynamic select', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Get the checkbox, check it, check it for checked and validate the value of checkBoxOption1.
        // Instead of check(), click can be called but check it preferred
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');

        // Uncheck the radio button
        cy.wait(2000);
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // check multiple checkboxes. Need to pass value of elements.
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        //Static dropdown selection . we can pass either value, or displyaed text of selection or index
        cy.get('select#dropdown-class-example').select(3).should('have.value','option3'); //by index
        cy.wait(2000);
        cy.get('select').select('option2').should('have.value','option2'); //by value
        cy.wait(2000);
        cy.get('select').select('Option1').should('have.value','option1'); // By displayed option

        //Dynamic select where select options vary on type of some text. Like in autocomplete. Below is the example for same
        cy.get('input#autocomplete').type('ind');
        cy.get('li.ui-menu-item div').each(($el) => {
            let countryName = $el.text();
            if($el.text()=='India'){
                cy.log('countryName: '+countryName)
                //$el.click(); click is not supported directly promises not handled on $el
                // So we have to wrap it as shown in below code.
                cy.wait(2000)
                cy.wrap($el).click();
            }

        })
        cy.get('input#autocomplete').should('have.value', 'India');

        //To check the hide and visible elements
        cy.get('input#displayed-text').should('be.visible');
        cy.get('input#hide-textbox').click();
        cy.get('input#displayed-text').should('not.be.visible');
        cy.get('input#show-textbox').click();
        cy.get('input#displayed-text').should('be.visible');

        //Radio button selection
        cy.get('input.radioButton').each(($el) => {
            
            if ($el.text() === 'Radio3' ){
                cy.log($el.text());
                cy.wrap($el).check();
            }
                
        })

        cy.get('input[value="radio3"]').check().should('be.checked');

        //cy.get('input.radioButton').check(['Radio1','Radio3']);
    })
})
/// <reference types='cypress' />

describe('Test for calendar date selection', () => {

    it('Tests that proper date is selected from calendar', () => {
        // we can override the default timeout for this test
        Cypress.config('defaultCommandTimeout',6)
        const monthNumber = "6";
        const date = "15";
        const year = "2025";
     
        const expectList = [monthNumber,date,year];

       // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        //oprn the calendar
        cy.get('div.react-date-picker__inputGroup').click();

        cy.get('button.react-calendar__navigation__label').click();
        
        //cy.wait(1000);

        cy.get('button.react-calendar__navigation__label').click();

        //select year
        cy.get('.react-calendar__decade-view__years').find('.react-calendar__decade-view__years__year').each(($el, index, $list) => {
            const year = $el.text();

            if (year.includes('2025')){
                cy.log(year);
                cy.wrap($el).click();
            }   
          }); 

        //Select month
        cy.get('div.react-calendar__year-view__months').find('button.react-calendar__year-view__months__month').each(($el, index, $list) => {
            const month = $el.text();
    
            if (month.includes('May')){
                cy.log(month);
                cy.wrap($el).click();
            }   
          }); 

          cy.get('.react-calendar__navigation__label__labelText--from').should('contain','May 2025');

          cy.wait(2000);

          // Click next arrow button to go to next month
          cy.get('.react-calendar__navigation__next-button').click();

          // select the day from the month.
          cy.get('div.react-calendar__month-view__days').find('button.react-calendar__month-view__days__day').each(($el, index, $list) => {

            const day = $el.text();

            if(day.includes('15')) {
                cy.log(day);
                cy.wrap($el).click();
            }

          })

          //Valodate the date
          cy.get('input.react-date-picker__inputGroup__input').each(($el,index) => {
            cy.wrap($el).invoke('val').should('eq',expectList[index])
          }) 

    })
})
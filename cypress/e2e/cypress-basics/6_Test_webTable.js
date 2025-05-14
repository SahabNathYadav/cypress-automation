/// <reference types='cypress' />

describe('Test the web table', () => {
    it('Extract the data from a column of a table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Locator - table[name="courses"] tr td:nth-child(2), gets all the data of second column named course
        // Iterate the list and get the text displayed in table
        // For the matched courseText, get the next column data by using next() function. 
        // Since next() is jquery method so resolve promises using then() and compare the value of price
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
            const courseText = $el.text();
            cy.log("Courses name: "+ courseText);

            if (courseText.includes('WebServices')){
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal('35')
                })
                return false; // When matches, breaks the loop.
            }
        })

    })
})


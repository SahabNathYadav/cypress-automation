##### Step1:

doing minor changes

Install latest Node.js version based on your OS

Set up ypur bash profile

##### Step2:

To install packages  mentioned package.json  use below command in terminal bash

npm install


##### Step3:

To run the script mentioned in package.json, use in terminal
npm run test

##### To run test with specific cucumber tag eg @test use below in terminal

npx cypress run --env tags="@test" 

To generate report  run  below in terminal

npm run report

To open the Cypress from terminal use below command

npx cypress open

To run the tests from Terminal

npx cypress run

To run tests in a single spec file

npx cypress run --record --spec "cypress/e2e/my-spec.cy.js"
(here --record can be skipped)





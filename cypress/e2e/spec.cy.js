import Login from './pageObjects/login';
import example from "./../fixtures/example.json"

const login = new Login();
describe('01 login scenario', () => {
  it('01 given an user with valid credentials, he should be logged into https://amazon.in successfully', () => {
    cy.visit({url: Cypress.env('BASE_URL'), failOnStatusCode: false})
    // cy.task('sleep', { time: 20000 })
    login.loginDownArrowButtonOnHomePage().click();
    login.email().type(Cypress.env('EMAIL'))
    login.continueButton().click()
    login.password().type(Cypress.env('PASSWORD'))
    login.signInButton().click()
    cy.location('pathname')
        .should('not.include', '/gp/buy/thankyou/handlers/display.html');
    // cy.writeFile('cypress-tests/testoutput.txt', 'Hi');
    cy.screenshot({capture: 'runner'})
    // cy.pause();
    // console.error("rakeshhb1")
    cy.log('Log')
    cy.signOut();
    cy.contains('Sign');
    cy.log(example.body);
  })
})
import Login from './pageObjects/login';

const login = new Login();
describe('login scenario', () => {
  it('given an user with valid credentials, he should be logged into https://amazon.in successfully', () => {
    cy.visit({url: Cypress.env('BASE_URL'), failOnStatusCode: false})
    // cy.task('hello', { greeting: 'Hello', name: 'World' })
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
  })
})
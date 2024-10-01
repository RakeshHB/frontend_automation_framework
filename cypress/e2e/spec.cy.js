import Login from "./pageObjects/login";
import example from "./../fixtures/example.json";

const login = new Login();

describe('01 login scenario', () => {
  it('01 given an user with valid credentials, he should be logged into https://www.amazon.in successfully',
      () => {
    cy.visit({url: Cypress.env('BASE_URL'), failOnStatusCode: false});
    login.signInButtonDropDown().click();
    login.emailTextBox().type(Cypress.env('EMAIL'));
    login.continueButton().click();
    login.passwordTextBox().type(Cypress.env('PASSWORD'));
    login.signInButton().click();
    cy.signOut();
    // cy.task('sleep', 20000);
    cy.log(example.body);
    // cy.location('pathname').should('not.include', '/thanks');
    // cy.contains('Sign');
    // cy.writeFile('out.txt', 'Hi');
    cy.screenshot({capture: "runner"});
  })
})
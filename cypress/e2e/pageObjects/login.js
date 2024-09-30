class login {
    email() {
        return cy.get('#ap_email')
    }
    password(){
        return cy.get('#ap_password')
    }
    loginDownArrowButtonOnHomePage() {
        return cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon')
    }
    continueButton() {
        return cy.get('.a-button-inner > #continue')
    }
    signInButton() {
        return cy.get('#signInSubmit')
    }
}
export default login
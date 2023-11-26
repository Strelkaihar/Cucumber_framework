const TGBasePage = require('./TGBasePage')
class TGLoginPage extends TGBasePage {
    getUsernameField() {
        return cy.get('#username')
    }
    getLoginForm() {
        return cy.get('.is-size-3')
    }
    getPasswordField() {
        return cy.get('#password')
    }
    getLoginButton() {
        return cy.get('#login_btn')
    }
    getSuccessMessage() {
        return cy.get('#success_lgn')
    }
    getErrorMessage() {
        return cy.get('#error_message')
    }
    userLogin(username, password) {
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
    }
}
module.exports = TGLoginPage

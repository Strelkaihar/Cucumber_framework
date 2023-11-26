const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGLoginPage = require('../../../pages/TGLoginPage')

const tgLoginPage = new TGLoginPage()


When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, (username,password) => {
    tgLoginPage.userLogin(username, password)
})
When(/^user click Login Button$/, () => {
    tgLoginPage.getLoginButton().click()
})
Then(/^user should see a "([^"]*)" message$/, (message) => {
    message === 'Invalid Username entered!' ?
        tgLoginPage.getErrorMessage().should('have.text', message)
        : tgLoginPage.getSuccessMessage().should('have.text', message)

})
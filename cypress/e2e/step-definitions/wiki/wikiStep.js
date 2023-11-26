const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const WikiPage = require('../../../pages/WikiPage')

const wikiPage = new WikiPage()


When(/^user search for "([^"]*)" on Wikipedia$/, (message) => {
    wikiPage.typeText(message)
})

Then(/^user should see "([^"]*)" in the first heading$/, (message) => {
	wikiPage.getFirstHeader().should('have.text', message)
})

Then(/^user should see below languages around the logo$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    wikiPage.getLangMidle().each((el, index) => {
        cy.wrap(el).should('have.text', arr[index])
    })
})


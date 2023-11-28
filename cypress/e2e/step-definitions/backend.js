const { When, Given, Then } = require('@badeball/cypress-cucumber-preprocessor')
const BackendPage = require('../../pages/backendPage')

const backEndPage = new BackendPage()

Given(/^I am on the "([^"]*)" page$/, (url) => {
    cy.visit(url)
})

When(/^I fill in the First Name with "([^"]*)"$/, (fName) => {
    backEndPage.getFirstName().type(fName)
})


Then(/^I fill in the Last Name with "([^"]*)"$/, (lName) => {
    backEndPage.getLastName().type(lName)
})

Then(/^I fill in the Email with "([^"]*)"$/, (email) => {
    backEndPage.getEmail().type(email)
})

Then(/^I fill in the Date of Birth with "([^"]*)"$/, (dob) => {
    backEndPage.getDob().type(dob)
})

Then(/^I click the ADD button$/, () => {
    backEndPage.getAddButton().click()
})

Then(/^I should see "([^"]*)" in the users list$/, (fullName) => {
    backEndPage.getUserList().contains(fullName)
})

Then(/^I change the Email to "([^"]*)"$/, (email) => {
    backEndPage.getModalEmail().clear().type(email)
})

When(/^I click the EDIT button for "([^"]*)"$/, (user) => {
    backEndPage.getUserEditButton(user)
})


Then(/^I click the UPDATE button$/, () => {
	backEndPage.getModalAddButton().click()
    backEndPage.getModal().should('not.exist')
})

Then(/^I should see the new email "([^"]*)" next to "([^"]*)"$/, (email, user) => {
    backEndPage.getSpecificUserEmail(user, email)
})

When(/^I click the DELETE button for "([^"]*)"$/, (user) => {
    backEndPage.getUserDeleteButton(user)
})

Then(/^I should not see "([^"]*)" in the users list$/, (user) => {
    backEndPage.getSpecificUser(user).should('not.exist')
})

When(/^I click the DELETE ALL button$/, () => {
	backEndPage.getDeleteAllButton().click()
})

Then(/^I confirm the deletion$/, () => {
    backEndPage.getUserList().find('> div').should('have.length', 2)
})

Then(/^I should see "([^"]*)"$/, (text) => {
    backEndPage.getNumberOfActiveUser().should('have.text', text)
})










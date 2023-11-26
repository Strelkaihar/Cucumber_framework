const { Then } = require('@badeball/cypress-cucumber-preprocessor')
const NorthwesternPage = require('../../../pages/NorthwesternPage')

const northwesternPage = new NorthwesternPage()

Then(/^user should see below navbar items$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    northwesternPage.getNavBarItems().each((el, index) => {
        cy.wrap(el.text().trim()).should('eq', arr[index])
    })
    for(const el of arr) {
        cy.log(el)
    }
})

// Then(/^user should fill the form$/, (dataTable) => {
// 	const inputs = dataTable.hashes()
//         inputs.forEach(input => cy.log(input))
    
// })

// Then(/^user should key value$/, (dataTable) => {
// 	const inputs = dataTable.rowsHash()
//     for(const key in inputs) {
//         cy.log(key)
//         cy.log(inputs[key])
//     }
// })


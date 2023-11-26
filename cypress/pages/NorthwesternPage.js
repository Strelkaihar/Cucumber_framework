class NorthwesternPage {
    getNavBarItems() {
        return cy.get('#top-nav > div  > ul > li > a')
    }
}
module.exports = NorthwesternPage
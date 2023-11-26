
class WikiPage  {
    getSearchInput(){
        return cy.get('#searchInput')
    }
    getFirstHeader(){
        return cy.get('#firstHeading')
    }
    typeText(message) {
       return this.getSearchInput().type(message + '{enter}')
    }
    getLangMidle() {
        return cy.get('.central-featured strong')
    }

}
module.exports = WikiPage
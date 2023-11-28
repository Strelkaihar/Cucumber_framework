class BackendPage {
 getFirstName() {
    return cy.get('[name="firstName"]')
 }
 getLastName() {
    return cy.get('[name="lastName"]')
 }

 getEmail(){
    return cy.get('[name="email"]')
 }
 getDob(){
    return cy.get('[name="dob"]')
 }
getAddButton() {
    return cy.get('[type="submit"]')
}
getUserList() {
    return cy.get('.common_listContainer__cvSer')
}
getNumberOfActiveUser(){
    return cy.get('.common_count__B2RKH')
}
getModal() {
    return cy.get('#mymodal')
}
getModalEmail() {
    return this.getModal().find('[name="email"]')
}
getDeleteAllButton(){
    return cy.get('.common_undernav__spCsm > button')
}
getModalAddButton(){
    return this.getModal().find('[type="submit"]')
}
getUserEditButton(user){
    return this.getUserList().contains('.common_list__UR80V', user).contains('EDIT').click()
}
getSpecificUser(user){
    return this.getUserList().contains(user)
  }

getSpecificUserEmail(user, email){
    return this.getSpecificUser(user).contains(email)
  }
getUserDeleteButton(user){
    return this.getUserList().contains('.common_list__UR80V', user).contains('DELETE').click()
}

}
module.exports = BackendPage
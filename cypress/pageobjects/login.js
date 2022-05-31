export class Login {
navigate(){
    cy.visit('https://www.saucedemo.com')
}
title(){
    cy.title().should('eq', 'Swag Labs')
}
loginBtn(username, password) {
    cy.get('#user-name').should('be.visible').type(username)

    cy.get('#password').should('be.visible').type(password)
    
    cy.get('#login-button').click()
}
}
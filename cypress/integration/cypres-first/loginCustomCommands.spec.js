// <reference types="Cypress" />

describe("Login Page Test", () => {
    it("test_correct_login", () => {
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com')
        cy.get("@user").then((user) =>{
            cy.login(user.username, user.password)
        })
        cy.get('.title').should('contain', 'Products')
        
    })
})
/// <reference types="Cypress" />

describe("Saurce Login Page Test", () => {
    it("test_check_title", () => {
        cy.visit('https://www.saucedemo.com')
        cy.title().should('eq', 'Swag Labs')
    })
    it("test login fail", () => {
        cy.get('#user-name').type('user')
        cy.get('#password').type('1212412')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    })

    it("test login correct", () => {
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('contain', 'Products')
    })
})
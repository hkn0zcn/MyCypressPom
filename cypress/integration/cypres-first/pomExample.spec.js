/// <reference types="Cypress" />

import {Login} from "../../pageobjects/login";
const login = new Login();

describe("Saurce Login Page Test", () => {
    it("test_check_title", () => {
        login.navigate()
        login.title()
      
    })
    it("test login pass", () => {
        cy.fixture("userdata").as("user")
        cy.get("@user").then((user) =>{
            login.loginBtn(user.username, user.password)
        })
    })
})
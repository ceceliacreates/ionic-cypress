/// <reference types="cypress" />

describe("critical path", () => {
    beforeEach(() => {
   
        cy.viewport('iphone-5')
      })

    it.only("swipes through tutorial", () => {
        //pauses added for demonstration purposes, can be removed

        cy.enableTutorial();
        cy.pause()
        cy.swipeLeft();
        cy.pause()
        cy.swipeLeft();
        cy.pause()
        cy.swipeLeft();
        cy.pause()
        cy.contains("Continue").click();
    })

})
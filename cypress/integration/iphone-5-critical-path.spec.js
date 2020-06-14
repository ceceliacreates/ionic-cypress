/// <reference types="cypress" />

describe("critical path", () => {
    beforeEach(() => {
   
        cy.viewport('iphone-5')
      })

    it("swipes through tutorial", () => {

        //pauses added for talk demo, can be removed
        cy.enableTutorial();
        cy.swipeLeft();
        cy.pause()
        cy.swipeLeft();
        cy.pause()
        cy.swipeLeft();
        cy.pause()
        cy.contains("Continue").click();
    })
})
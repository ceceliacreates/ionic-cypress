/// <reference types="cypress" />

describe("critical path", () => {

    it.only("enables then disables tutorial", () => {
        cy.log("ENABLE TUTORIAL")
        cy.enableTutorial();
        cy.pause();
        cy.log("DISABLE TUTORIAL");
        cy.disableTutorial();
    })
})
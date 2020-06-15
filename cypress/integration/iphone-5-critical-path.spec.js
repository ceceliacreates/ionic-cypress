/// <reference types="cypress" />

describe("critical path", () => {
    // commented out for demonstration purposes
    // beforeEach(() => {
   
    //     cy.viewport('iphone-5')
    //   })

    it("adds a session from list to favorites", () => {
        // can remove cy.viewport after uncommenting beforeEach() hook
        cy.viewport('iphone-5')
        cy.disableTutorial();
        cy.contains('University of Ionic').click({force: true});
        cy.get('[data-cy=favorite]').click();
        cy.get('[data-cy=back').click();
        cy.contains('Favorites').click();
        cy.contains('University of Ionic');
        cy.pause();
    })

    it("enables dark mode", () => {
        // for demonstration purposes
        // this test will break! There is no viewport adjustment so the command to get the menu button will fail.
        // uncomment the beforeEach hook or add cy.viewport('iphone-5') to get test to pass.
        cy.disableTutorial();
        cy.pause();
        cy.get('[data-cy=menu]').click();
        cy.get('[data-cy=dark-mode]').click();
        cy.contains("Dark Mode").should('have.css', 'color', 'rgb(255, 255, 255)')
        
    })

    //remove .skip to run full test spec

    it.skip("searches for a session and adds to favorites", () => {
        // can remove cy.viewport after uncommenting beforeEach() hook
        cy.viewport('iphone-5')
        cy.disableTutorial();
        cy.get('[data-cy=search]').click();
        cy.get('[data-cy=searchbar]')
        .click()
        .type("Angular{enter}")
        cy.contains("Angular Directives").click();
        cy.get('[data-cy=favorite]').click();
        cy.get('[data-cy=back]').click();
        cy.contains("Favorites").click();
        cy.contains("Angular Directives");
        cy.pause();
    })
})
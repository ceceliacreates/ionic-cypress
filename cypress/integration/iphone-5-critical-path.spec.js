/// <reference types="cypress" />

describe("happy path", () => {
    beforeEach(() => {
   
        cy.viewport('iphone-5')
      })

    it.skip('visits the page', () => {

        cy.visit('/');

    })

    it("swipes through tutorial", () => {

        cy.enableTutorial();
        cy.swipeLeft();
        cy.swipeLeft();
        cy.swipeLeft();
        cy.contains("Continue").click();
    })

    it("adds a session from list to favorites", () => {
        cy.disableTutorial();
        cy.contains('University of Ionic').click({force: true});
        cy.get('[data-cy=favorite]').click();
        cy.get('.can-go-back > .header-md > ion-toolbar.in-toolbar > .buttons-first-slot > .md').click();
        cy.contains('Favorites').click();
        cy.contains('University of Ionic');
    })

    it("enables dark mode", () => {

        cy.disableTutorial();
        cy.get('.buttons-first-slot > .md').click();
        cy.get('.item.ion-valid > .ng-valid').click();
        cy.contains("Dark Mode").should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it("searches for a session and adds to favorites", () => {

        cy.disableTutorial();
        cy.get('.buttons-last-slot > :nth-child(1)').click();
        cy.get('.toolbar-title-default > .ng-pristine > .searchbar-input-container > .searchbar-input')
        .click()
        .type("Angular{enter}")
        cy.contains("Angular Directives").click();
        cy.get('.buttons-last-slot > :nth-child(1)').click();
        cy.get('.buttons-first-slot > .md').click();
        cy.contains("Favorites").click();
        cy.contains("Angular Directives");
    })
})
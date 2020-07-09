/// <reference types="cypress" />

describe("desktop-tests", () => {
  it("adds a session from list to favorites", () => {
    cy.disableTutorial();
    cy.contains("University of Ionic").click({ force: true });
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back").click();
    cy.contains("Favorites").click();
    cy.contains("University of Ionic");
  });

  it("enables dark mode", () => {
    cy.disableTutorial();
    cy.get("[data-cy=dark-mode]").click();
    cy.contains("Dark Mode").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("searches for a session and adds to favorites", () => {
    cy.disableTutorial();
    cy.get("[data-cy=search]").click();
    cy.get("[data-cy=searchbar]").click().type("Angular{enter}");
    cy.contains("Angular Directives").click();
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back]").click();
    cy.contains("Favorites").click();
    cy.contains("Angular Directives");
  });
});

describe("mobile-tests", () => {
  beforeEach(() => {
    cy.viewport("iphone-5");
  });

  it("adds a session from list to favorites", () => {
    cy.disableTutorial();
    cy.contains("University of Ionic").click({ force: true });
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back").click();
    cy.contains("Favorites").click();
    cy.contains("University of Ionic");
  });

  it("enables dark mode", () => {
    cy.disableTutorial();
    cy.get("[data-cy=menu]").click();
    cy.get("[data-cy=dark-mode]").click();
    cy.contains("Dark Mode").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("searches for a session and adds to favorites", () => {
    cy.disableTutorial();
    cy.get("[data-cy=search]").click();
    cy.get("[data-cy=searchbar]").click().type("Angular{enter}");
    cy.contains("Angular Directives").click();
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back]").click();
    cy.contains("Favorites").click();
    cy.contains("Angular Directives");
  });
});

/// <reference types="cypress" />

describe("critical path", () => {
  beforeEach(() => {
    cy.viewport("iphone-5");
  });

  it.only("swipes through tutorial", () => {
    //pauses added for demonstration purposes, can be removed

    cy.enableTutorial();
    cy.wait(1000);
    cy.swipeLeft();
    cy.wait(1000);
    cy.swipeLeft();
    cy.wait(1000);
    cy.swipeLeft();
    cy.wait(1000);
    cy.contains("Continue").click();
  });
});

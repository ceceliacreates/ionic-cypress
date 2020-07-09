/// <reference types="cypress" />

describe("critical path", () => {
  it("enables then disables tutorial", () => {
    cy.log("ENABLE TUTORIAL");
    cy.enableTutorial();
    cy.wait(2000);
    cy.log("DISABLE TUTORIAL");
    cy.disableTutorial();
  });
});

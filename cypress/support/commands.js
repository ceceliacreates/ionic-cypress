// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { Storage } from '@ionic/storage';

const storage = new Storage;

Cypress.Commands.add('enableTutorial', () => {
  cy.visit('/', {
    onBeforeLoad () {
      storage.set('ion_did_tutorial', false)
    }
  })
})

Cypress.Commands.add('disableTutorial', () => {
    cy.visit('/', {
        onBeforeLoad () {
          storage.set('ion_did_tutorial', true)
        },
      })
})
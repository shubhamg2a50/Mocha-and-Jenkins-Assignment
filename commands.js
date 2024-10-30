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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
require('@cypress/xpath');

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type('shub55002');
    cy.get('#loginFrm_password').type('shub123');
    cy.get('#loginFrm > fieldset > .btn').click()  });
  
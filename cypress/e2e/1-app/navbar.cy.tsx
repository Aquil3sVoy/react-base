/// <reference types="cypress" />

describe('navbar', () => {
  it('Links', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').should('be.visible')
    cy.get('nav').contains('About').click()
    cy.url().should('include', '/about')
    cy.get('nav').contains('Home').click()
    cy.get('nav').get("[data-testid='switch-to-dark-mode']").click()
    cy.get('nav').get('div').should('have.class', 'dark')
  })
})

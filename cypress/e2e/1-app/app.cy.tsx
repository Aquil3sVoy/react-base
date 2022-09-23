/// <reference types="cypress" />

describe('app', () => {
  it('works', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Dashboard')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email')
  .type('c.nim.dev@gmail.com').should('have.value', 'c.nim.dev@gmail.com')
    })
})

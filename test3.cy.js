describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-btn').click()
    cy.get("#action-canvas").click()
    cy.get("#action-canvas").click('topLeft')
    cy.get("#action-canvas").click('bottomRight')
  })
})
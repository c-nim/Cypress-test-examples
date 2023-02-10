//first test
describe('cypress example page', () => {
  //
  it('make a request/Query an element', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1')
    .should('exist')
    .contains('Kitchen Sink')
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit(' http://122.116.251.52')
    cy.get(':nth-child(1) > .input_osg').type('fake@email.com')
    cy.get(':nth-child(1) > .input_osg').should('have.value', 'fake@email.com')
    cy.get('.button_osg').click()

  })
})
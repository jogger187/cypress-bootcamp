describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.instagram.com/accounts/login/?source=desktop_nav&next=https%3A%2F%2Fwww.instagram.com%2Flogin%2F%3F__coig_login%3D1')
    cy.get(':nth-child(1) > .x1i10hfl > ._acan > ._aacl').click()
    cy.get(':nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b').type('testman@gmail.com').should('have.value', 'testman@gmail.com')
    cy.get(':nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b').type('testman123').should('have.value', 'testman123')
    cy.get('._abc2 > :nth-child(3)').click()
  })
})
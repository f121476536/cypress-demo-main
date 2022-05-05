describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
    it('check title word', () => {
      cy.get("#title").should("contain", "Cypress Demo Site");
    })
  })
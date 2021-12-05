describe('Visiting the application, a user', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to see a header', () => {
    cy.get('[data-cy=rps-header]').should('contain.text', "Let's play Rock Paper Scissor");
  });

  it('is expected to see a subheader', () => {
    cy.get('[data-cy=rps-subheader]').should('contain.text', "Pick your card!");
  });

  it('is expected to display Rock card', () => {
    cy.get('[data-cy=rps-card-1]').within(() => {
      cy.get(".image").should('be.visible');
    });
  });

  it('is expected to display Paper card', () => {
    cy.get('[data-cy=rps-card-2]').within(() => {
      cy.get(".image").should('be.visible');
    });
  });

  it('is expected to display Scissor card', () => {
    cy.get('[data-cy=rps-card-3]').within(() => {
      cy.get(".image").should('be.visible');
    });
  });
});
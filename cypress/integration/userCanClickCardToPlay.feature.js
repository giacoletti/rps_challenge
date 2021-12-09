describe('Visiting the application, a user that clicks on the "Rock" card', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=rps-card-1]').click();
  });

  it('is expected to open modal and display match result', () => {
    cy.get('[data-cy=rps-modal]').within(() => {
      cy.get('[data-cy=rps-match-result]').should('be.visible');
      cy.get('[data-cy=rps-user-choice]').should('be.visible');
      cy.get('[data-cy=rps-cpu-choice]').should('be.visible');
    });
  });
});
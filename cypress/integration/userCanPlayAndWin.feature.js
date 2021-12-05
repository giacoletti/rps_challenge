describe('Visiting the application, a user', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=rps-card-1]').click();
  });

  it('is expected to open modal and display win message', () => {
    cy.get('[data-cy=rps-modal]').within(() => {
      cy.get('[data-cy=rps-match-result]').should('contain.text', 'You win!');
      cy.get('[data-cy=rps-user-choice]').should('be.visible');
      cy.get('[data-cy=rps-cpu-choice]').should('be.visible');
    });
  });
});
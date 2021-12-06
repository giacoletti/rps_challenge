describe('Visiting the application, a user', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.Math, "floor").returns(2).as('mathStub');
      }
    });
    cy.get('[data-cy=rps-card-1]').click();
  });

  describe('is expected to open modal and', () => {
    it('is expected to call Math floor function once', () => {
      cy.get('@mathStub').should('be.calledOnce');
    });

    it('is expected to display win message', () => {
      cy.get('[data-cy=rps-modal]').within(() => {
        cy.get('[data-cy=rps-match-result]').should('contain.text', 'You win!');
      });
    });

    it('is expected to display user chosen rock card', () => {
      cy.get('[data-cy=rps-user-choice]').within(() => {
        cy.get('.image').should('have.attr', 'name', 'rock');
      });
    });

    it('is expected to display cpu chosen scissor card', () => {
      cy.get('[data-cy=rps-cpu-choice]').within(() => {
        cy.get('.image').should('have.attr', 'name', 'scissor');
      });
    });

    it('is expected to update user score', () => {
      cy.get('[data-cy=rps-user-score]').should('contain.text', 1);
    });
  });
});
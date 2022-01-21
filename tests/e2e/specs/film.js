// https://docs.cypress.io/api/introduction/api.html

describe('Homepage E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the correct display proposed films by genre', () => {
    let currentGenre;

    cy.get('.gallery .post__item:first-child .card__link')
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
    cy.wait(1000);
    cy.get('.box-info .card__genre').should(($div) => {
      currentGenre = $div.text();
    });

    cy.get('.box-gallery__top h2').should(($div) => {
      const genre = $div.text();
      expect(genre).be.contains(currentGenre);
    });

    cy.get('.gallery .card__genre').should(($div) => {
      const genres = $div.text();
      expect(genres).be.includes(currentGenre);
    });
  });
});

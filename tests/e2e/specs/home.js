// https://docs.cypress.io/api/introduction/api.html

describe('Homepage E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the correct first download', () => {
    cy.contains('h1', 'FIND YOUR MOVIE');
    cy.contains('.box-search .sort__label', 'Search by');
    cy.contains('.box-gallery .sort__label', 'Sort by');
    cy.get('.gallery .post__item').should('have.length', 9);
  });

  it('Check the search functionality (search by title)', () => {
    cy.get('.input')
      .should('be.visible')
      .type('batman')
      .should('have.value', 'batman');
    cy.get('.gallery .card__name').should('include.text', 'Batman');
  });

  it('Check the search functionality (search by genre)', () => {
    cy.get('.input')
      .should('be.visible')
      .type('animation');
    cy.contains('.box-search .button-group .button:nth-child(2)', ' Genre ')
      .should('be.visible')
      .click().should('have.class', 'active');
    cy.get('.gallery .card__genre').should('include.text', 'Animation');
  });

  it('Check the correct sort functionality (sort by release date)', () => {
    cy.get('.input').type('transform');
    cy.wait(1000);
    let firstElementInGallery;

    cy.get('.gallery .post__item:first-child .card__year').should(($div) => {
      firstElementInGallery = $div.text();
    });
    cy.get('.gallery .post__item:nth-child(2) .card__year').should(($div) => {
      const secondElementInGallery = $div.text();
      expect(secondElementInGallery).be.greaterThan(firstElementInGallery);
    });
  });

  it('Check the correct sort functionality (sort by rating)', () => {
    let firstSearchedFilmRating;
    // save current input value and sort by rating
    // eslint-disable-next-line func-names
    const init = function () {
      cy.get('.input').type('fif');
      cy.contains('.box-gallery__top .button-group .button:nth-child(2)', ' Rating ')
        .should('be.visible')
        .click().should('have.class', 'active');
      cy.wait(1000);
    };

    // open the first film and save rating value
    init();
    cy.get('.gallery .post__item:first-child .card__link')
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
    cy.wait(1000);
    cy.get('.card__rating').should(($div) => {
      firstSearchedFilmRating = $div.text();
    });
    cy.go('back');

    // open the second film -> save rating value -> compare with the value from previous film
    init();
    cy.get('.gallery .post__item:nth-child(2) .card__link')
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
    cy.wait(1000);
    cy.get('.card__rating').should(($div) => {
      const secondSearchedFilmRating = $div.text();
      expect(secondSearchedFilmRating).be.greaterThan(firstSearchedFilmRating);
    });
  });

  it('Check the correct render placeholder if films were not found', () => {
    cy.get('.input').type('ddd');
    cy.get('.placeholder').should('have.text', 'No films found');
  });
});

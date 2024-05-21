/// <reference types="cypress"/>

describe('Practice02 - Amazon', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/ ');

  });

  it('TASK-1: Validate the Amazon Header', () => {
    // task 2
    cy.get('#nav-logo-sprites').should('be.visible');
    // Task 3
    cy.get('#nav-global-location-popover-link').should('be.visible');
    // Task 4
    cy.get('.nav-search-scope').should('be.visible');
    // Task 5
    cy.get('#twotabsearchtextbox').should('be.visible');
    // Task 6
    cy.get('#nav-search-submit-button').should('be.visible');
    // Task 7
    cy.get('.nav-line-2').should('be.visible');
    // Task 8
    cy.get('#nav-link-accountList').should('be.visible');
    // Task 9
    cy.get('#nav-orders').should('be.visible');
    // Task 10
    cy.get('#nav-cart').should('be.visible');
    cy.get('#nav-cart-count').should('have.text', '0');

  });

  it('TASK-2: Validate the Amazon Header', () => {
    // Task 2
    cy.get('#nav-global-location-popover-link').click();
    // Task 3
    cy.get('#GLUXZipUpdateInput').type('60018')
    // Task 4
    .get('.a-button-input').eq(2).click();
    // Task 5
    cy.get('#GLUXZipConfirmationValue').should('have.text', '60018');
    // Task 6
    cy.get('#a-autoid-1-announce').click();
    // Task 7
    cy.get('#glow-ingress-line2').contains('Des Plaines 60018');

  })

  it('TASK-3: Validate the Amazon Search Results', () => {
    cy.get('#twotabsearchtextbox').type('Mug{enter}')
    
    cy.get('.sg-col-inner > .a-section > span').first().then(($el) => {
    const str = $el.text();
    
    expect(Number(str.slice(str.indexOf('over') + 5, str.indexOf('results') - 1)
    .replace(',', ''))).to.be.above(0); 
  })
});

  it('Task-4: Validate the Google Amazon Footer Columns', () => {
    const expectedTexts = [' Get to Know Us', 'Make Money with Us', 'Amazon Payment Products', 'Let Us Help You']

    cy.get('.navFooterLinkCol').each(($el, index) => {
      cy.wrap($el).should('include.text', expectedTexts[index]);
    });

  })
});
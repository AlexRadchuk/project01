/// <reference types="cypress"/>

describe('Practice03 - Wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/');

  });
/**
 * TASK-1: Validate the Wikipedia Logo and Slogan
1.	Go to https://www.wikipedia.org/ 
2.	Validate that the logo is displayed, and its text is "Wikipedia"
3.	Validate that the slogan is displayed, and its text is "The Free Encyclopedia"
 */
it('Task 1', () => {
  // 2
  cy.get('[class*="central-textlogo-wrapper"]').should('be.visible').contains('Wikipedia');
  // 3
  cy.get('[class*="central-textlogo-wrapper"]').contains('The Free Encyclopedia');
  
})
/**
 * TASK-2: Validate the Wikipedia Top Ten Languages
1.	Go to https://www.wikipedia.org/ 
2.	Validate that there are top ten languages are displayed
3.	Validate that the top language is "English"
 */
  it('Task 2', () => {
    cy.get('[data-jsl10n="top-ten-nav-label"]').should('be.visible');
    cy.get('[data-jsl10n="top-ten-nav-label"]').children().eq('0').contains('English');
  })
/**
 * TASK-3: Validate the Wikipedia Search Results
1.	Go to https://www.wikipedia.org/ 
2.	Search for "Cypress" in the search bar
3.	Validate that "Cypress" is displayed in the title of the new page
4.	Validate that "Cypress" is displayed in the url of the new page
5.	Validate that "Cypress" is displayed in the main heading of the page
*/
  it('Task 3', () => {

cy.get('#searchInput').type('Cypress {enter}');
cy.title().should('include', 'Cypress');
cy.url().should('include', 'Cypress');
cy.get('.mw-page-title-main').should('have.text', 'Cypress');

  })
/**
 * TASK-4: Validate the Wikipedia Article Numbers for All Languages
1.	Go to https://www.wikipedia.org/ 
2.	Click on "Read Wikipedia in your language" button
3.	Validate that there are 18 languages have over 1,000,000 articles
4.	Validate that there are 53 languages have over 100,000 articles
5.	Validate that there are 99 languages have over 10,000 articles
6.	Validate that there are 126 languages have over 1,000 articles
7.	Validate that there are 29 languages have over 100 articles
 */ 
  it.only('Task 4', () => {
    cy.get('[class="lang-list-button-text jsl10n"]').click();
    const numOfLang = [18, 53, 99, 126, 29];
    for(let i = 0; i < numOfLang.length; i++) {
     cy.get('.hlist').eq(i).find('a').should('have.length',numOfLang[i])
    }
  })

});
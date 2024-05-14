/// <reference types="cypress" />

describe("test1", () => {
  beforeEach(() => {
    // This will fail if the page doesnt send text/html with a 200 status
    cy.visit("https://www.techglobal-training.com");
      });

    it("test1", () => {
      cy.get("#dropdown-button").click()
      cy.get("#frontend-option").click()
      





    });
  });


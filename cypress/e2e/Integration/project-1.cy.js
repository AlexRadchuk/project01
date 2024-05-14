///<reference types="cypress" />
describe("testCase01",() => {


  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
    cy.get(".is-size-3").should("contain", "Contact Us");
    cy.get("#address").should("contain", "2800 S River Rd Suite 310, Des Plaines, IL 60018");
    cy.get("#email").should("contain", "info@techglobalschool.com");
    cy.get("#phone-number").should("contain", "(224) 580-2150");
  });


  it("Test Case 02 - Validate the Full name input box", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
    cy.get(".field").first().should("have.text", "Full name *");
    cy.get(".control > .input").eq(0).should("have.attr", "placeholder", "Enter your full name")
    .and("be.visible")
    .and("have.attr", "required");
  });
  const buttons = ['Male', 'Female', 'Prefer not to disclose'];


    it("Test Case 03 - Validate the Gender radio button", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get(".control > .label").should("have.text", "Gender *");
      cy.get(".mr-1").should("have.attr", "required");
      cy.get('.radio').each(($el, index) => {
        cy.wrap($el).should('have.text', buttons[index])
        .children().should('be.enabled').and('not.be.checked');
      })
      cy.get(".radio input").eq(0).click();
    cy.get(".radio").each(($el, index) => {
      if ($el.text() === "Male") cy.wrap($el).children().should("be.checked");
      else cy.wrap($el).children().should("not.be.checked");
    });
    cy.get(".radio input").eq(1).click();
    cy.get('.radio').each(($el, index) => {
      if ($el.text() === 'Female') cy.wrap($el).children().should('be.checked')
      else cy.wrap($el).children().should("not.be.checked");
    });
  });  

    
    it("Test Case 04 - Validate the Address input box", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get(".control > .input").eq(1).should('be.visible').and('not.have.attr', 'required');
      cy.get('.label').eq(2).should('have.text', 'Address');
      cy.get(".control > .input").eq(1).should('have.attr', 'placeholder', 'Enter your address');
    });


    it("Test Case 05 - Validate the Email input box", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get(".control > .input").eq(2).should('be.visible').and('have.attr', 'required');
      cy.get('.label').eq(3).should('have.text', 'Email *');
      cy.get(".control > .input").eq(2).should('have.attr', 'placeholder', 'Enter your email');      
    });


    it("Test Case 06 - Validate the Phone input box", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get(".control > .input").eq(3).should('be.visible').and('not.have.attr', 'required');
      cy.get('.label').eq(4).should('have.text', 'Phone');
      cy.get(".control > .input").eq(3).should('have.attr', 'placeholder', 'Enter your phone number');      
    });


    it("Test Case 07 - Validate the Message text area", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get(".textarea").should('be.visible').and('not.have.attr', 'required');
      cy.get('.label').eq(5).should('have.text', 'Message');
      cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...');
    });


    it("Test Case 08 - Validate the Consent checkbox", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.');
      cy.get('.checkbox > input').should('have.attr', 'required');
      cy.get('.checkbox > input').should('be.enabled')
      .check().and('be.checked').uncheck().and('not.be.checked')
    });
  
    it("Test Case 09 - Validate the SUBMIT button", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get('.control .button').should('be.visible')
      .and('be.enabled').and('contain', 'SUBMIT')
  
    });
  

    it("Test Case 10 - Validate the form submission", () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
      cy.get('.control > .input').eq(0).type('Oleksandr Radchuk');
      cy.get(".radio input").eq(0).click();
      cy.get('.input').eq(1).type('1 Some Ave, SomCity IL, 60074');
      cy.get('.input').eq(2).type('myMail@gmail.com');
      cy.get('.input').eq(3).type('223-443-6936');
      cy.get('.textarea').type('I try to do project01');
      cy.get('.checkbox > input').check();
      cy.get('.control > .button').click();
      cy.get('.mt-5').should('have.text', 'Thanks for submitting!');
  
      cy.on('uncaught:exception', () => {
        return false

   
       
    });
  });
});

describe('E-commerce Platform Test Suite', () => {

    // Login before all tests
    before(() => {
      cy.login('shub55002', 'shub123');
    });
  
    // Logout after all tests
    after(() => {
      cy.get('.side_account_list > :nth-child(10) > a').click();  // Adjust selector as needed
    });
  
    // Test: Check if the search bar is present after login
    it('should display the search bar after login', () => {
      cy.get('#filter_keyword').should('be.visible');
    });
  
 
   
  });
  
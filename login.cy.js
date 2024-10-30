describe('Login Page Test Suite', () => {

  // Visit the login page before each test
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  // Clear cookies after each test
  afterEach(() => {
    cy.clearCookies();
  });

  // Test: Check if the login button is visible
  it('should display the login button', () => {
    cy.get('button[type="submit"]').should('be.visible');
  });

  // Test: Verify placeholder text for email field
  it('should have a field with placeholder "Enter your email"', () => {
    cy.get('input[name="username"]').should('have.attr', 'placeholder', 'Enter your email');
  });

});

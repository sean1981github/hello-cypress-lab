describe('Hello Cypress', () => {
  it('visit the react default site', () => {
    cy.visit('http://localhost:3000');
  });

  it('visit the http://localhost:3000 site using base URL', () => {
    cy.visit('');
  });

  it('should render default Learn React text', () => {
    cy.contains('Learn React');
  });

  it('title should contain text ', () => {
    cy.title().should('eq', 'React App');
  });

  it('should print out the env', () => {
    console.log(Cypress.env('FROM_CONFIG'));
    console.log(Cypress.env('FROM_ENV_FILE'));
    //export CYPRESS_FROM_EXPORT="value from export"
    console.log(Cypress.env('FROM_EXPORT'));
    console.log(Cypress.env('FROM_INIT'));
  });
});

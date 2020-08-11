it('Behaves as desired', () => {
  cy.visit('http://localhost:3000/');

  cy.contains('Title').type('Hello');
  cy.contains('Description').type('Really long text.');
  cy.get('button').contains('Add').click();

  cy.get('h3').contains('Hello').should('exist');
  cy.get('p').contains('Really long text.').should('exist');

  cy.get('#calendar')
    .get('button.bg-indigo-700')
    .get('div.rounded')
    .should('exist');

  cy.get('button').contains('Hello').should('exist');
  cy.get('button').contains('Today').should('exist');
  cy.get('button')
    .contains('Hello')
    .get('svg.text-gray-800')
    .should('have.class', 'text-gray-800');

  cy.get('#calendar').contains(`${new Date().getFullYear()}`).next().click();
  cy.get('li').get('.text-gray-600').contains('1').click();

  cy.get('#calendar')
    .get('button.bg-indigo-700')
    .get('div.rounded')
    .should('exist');

  cy.get('#calendar').contains('Hello').should('not.exist');
  cy.contains('Really long text.').should('not.exist');

  cy.get('button')
    .contains('Hello')
    .get('svg')
    .should('not.have.class', 'text-gray-800');

  cy.contains('Title').type('Another');
  cy.contains('Description').type('Loreeeeeeeeeeeem.');
  cy.get('button').contains('Add').click();

  cy.get('button').contains('Another').should('exist');
  cy.get('button').contains(/In/i).should('exist');
  cy.get('button')
    .get('svg.text-gray-800')
    .should('have.class', 'text-gray-800');

  cy.get('#calendar').contains('Another').next().click();

  cy.get('button').contains('Another').should('not.exist');
  cy.get('button').contains(/In/i).should('not.exist');

  cy.get('.min-h-screen').should('have.class', 'bg-gray-200');
  cy.get('header .container button').click();
  cy.get('.min-h-screen').should('not.have.class', 'bg-gray-200');
  cy.get('.min-h-screen').should('have.class', 'bg-gray-900');
});

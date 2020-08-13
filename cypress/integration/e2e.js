it('Behaves as desired', () => {
  cy.visit('http://localhost:3000/')

  cy.contains('Title').type('Hello')
  cy.contains('Description').type('Really long text.')
  cy.get('button').contains('Add').click()

  cy.get('h3').contains('Hello')
  cy.get('p').contains('Really long text.')

  cy.get('button.bg-indigo-700 > div.rounded-full')

  cy.get('button').contains('Hello')
  cy.get('button').contains('Today')
  cy.get('button')
    .contains('Hello')
    .parent()
    .next()
    .should('have.class', 'text-gray-800')

  cy.get('h2')
    .contains('Calendar')
    .parent()
    .contains(`${new Date().getFullYear()}`)
    .next()
    .click()

  cy.get('li.text-gray-600').contains('1').click()

  cy.get('button.bg-indigo-700 > div').should('not.have.class', 'rounded-full')

  cy.get('h2')
    .contains('Calendar')
    .parent()
    .contains('Hello')
    .should('not.exist')
  cy.get('h2')
    .contains('Calendar')
    .contains('Really long text.')
    .should('not.exist')

  cy.get('button')
    .contains('Hello')
    .parent()
    .next()
    .should('not.have.class', 'text-gray-800')

  cy.contains('Title').type('Another')
  cy.contains('Description').type('Loreeeeeeeeeeeem.')
  cy.get('button').contains('Add').click()

  cy.get('button').contains('Another')
  cy.get('button').contains(/In/i)
  cy.get('button')
    .contains('Another')
    .parent()
    .next()
    .should('have.class', 'text-gray-800')

  cy.get('h2').contains('Calendar').parent().contains('Another').next().click()

  cy.get('button').contains('Another').should('not.exist')
  cy.get('button').contains(/In/i).should('not.exist')

  cy.get('.min-h-screen').should('have.class', 'bg-gray-200')
  cy.get('header .container button').click()
  cy.get('.min-h-screen').should('not.have.class', 'bg-gray-200')
  cy.get('.min-h-screen').should('have.class', 'bg-gray-900')
})

import elements from '../pages/main/elements'

describe('My First Test', function() {
    it('Visit the documentation page', function() {
        
        cy.visit('https://s3.amazonaws.com/everfi-curriculums/curriculums/blacksmith2/develop/index.html#')

        cy.get('#module-documentation').click()

        cy.url().should('include', '#documentation')

    })
  })


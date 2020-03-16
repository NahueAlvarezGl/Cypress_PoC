import mainPageElements from '../pages/main/mainPageElements.json'
import inputElements from "../pages/main/inputElements.json"

describe('Select Option Input tests', () => {

    beforeEach(() => {
        // runs before each test in this block
        cy.visit(Cypress.config().blacksmith2Url)
        cy.goToDocumentationPage()
        cy.get(mainPageElements.componentsList, {timeout: 60000}).contains('Input').click()
        cy.url().should('include', 'input-doc')
      });

    it('by default on viewing the select option element the user sees the default option selected', () => {
        cy.get(inputElements.selectOptionInput).as('selectOption')
        cy.get('@selectOption').scrollIntoView()
        cy.get('@selectOption').should('be.visible')

        cy.get('@selectOption').invoke('val').should('be.equal', 'text one')
    
    })

    it('while the component is in its expanded state user can choose an option from the list by clicking on it', () => {
      cy.get(inputElements.selectOptionInput).as('selectOption')
      cy.get('@selectOption').scrollIntoView()

      cy.get('@selectOption').select('text three')
      cy.get('@selectOption').invoke('val').should('be.equal', 'text three')
    })
})
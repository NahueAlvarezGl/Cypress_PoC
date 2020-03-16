import elements from '../pages/main/elements'
import basicExampleElements from '../pages/main/basicExampleElements'
import advancedExampleElements from '../pages/main/advancedExampleElements'

describe('Selenium Easy PoC', function() {

    beforeEach(function() {
        // runs before each test in this block
        cy.visit(Cypress.config().baseUrl)
      });

    it('Visit the main page and check main buttons are displayed', function() {

        cy.get(elements.HomebarButton).should('be.visible')
        cy.get(elements.BasicButton).should('be.visible')
        cy.get(elements.IntermediateButton).should('be.visible')
        cy.get(elements.AdvancedButton).should('be.visible')
        cy.get(elements.CompletedButton).should('be.visible')
    })

    it('Check all elements are displayed for the first part', function(){
        cy.get(elements.HomebarButton).click()
        cy.get(elements.StartPractisingButton).should('be.visible')
        cy.get(elements.StartPractisingButton).contains('Start Practising')
    })

    it('Check all elements are displayed for the second part', function(){
      cy.goToBasicExample()
      cy.get(basicExampleElements.SimpleFormDemo).should('be.visible')
      cy.get(basicExampleElements.CheckBoxDemo).should('be.visible')
      cy.get(basicExampleElements.RadioButtonsDemo).should('be.visible')
      cy.get(basicExampleElements.SelectDropdownList).should('be.visible')
      cy.get(basicExampleElements.JavascriptAlerts).should('be.visible')
      cy.get(basicExampleElements.WindowPopupModal).should('be.visible')
      cy.get(basicExampleElements.ProceedNextButton).should('be.visible')
      cy.get(basicExampleElements.ProceedNextButton).contains('Proceed Next')
  })

  it('Single input field test', function(){
    cy.goToBasicExample()
    cy.get(basicExampleElements.SimpleFormDemo).click()

    cy.get(basicExampleElements.EnterMessageInput).should('be.visible')
    cy.get(basicExampleElements.ShowMessageButton).should('be.visible')

    cy.get(basicExampleElements.EnterMessageInput).type('General Kenobi')
    cy.get(basicExampleElements.ShowMessageButton).click()

    cy.get(basicExampleElements.UserMessage).contains('General Kenobi')
  })

  it('Checkbox test', function(){
    cy.goToBasicExample()
    cy.get(basicExampleElements.CheckBoxDemo).click()

    cy.get(basicExampleElements.Checkbox).should('not.be.checked')
    cy.get(basicExampleElements.Checkbox).click()
    cy.get(basicExampleElements.Checkbox).should('be.checked')
    cy.get(basicExampleElements.CheckboxMessage).contains('Success - Check box is checked')
  })

  it('All Checkbox test', function() {
    cy.goToBasicExample()
    cy.get(basicExampleElements.CheckBoxDemo).click()

    cy.get(basicExampleElements.Checkboxes).check()

    cy.get(basicExampleElements.Checkboxes).should('be.checked')
  })

  it('Advanced Example Table Pagination test', function(){
    cy.get(elements.AdvancedButton).click()
    cy.get(advancedExampleElements.TablePagination).click()

    cy.get(advancedExampleElements.Table).should('be.visible')

    cy.get(advancedExampleElements.NavigationButtons).contains('2').click()

    cy.get(advancedExampleElements.NextPaginationButton).should('be.visible')
    cy.get(advancedExampleElements.PreviousPaginationButton).should('be.visible')
  })
})


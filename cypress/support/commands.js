import 'cypress-file-upload';
import mainPageElements from '../pages/main/mainPageElements'

// This command was only for example purposes

Cypress.Commands.add("goToInputPage", () => {
    cy.visit(Cypress.config().inputUrl)
})

Cypress.Commands.add("text", { prevSubject: true}, (subject, options) => {
    return subject.text();
  });

Cypress.Commands.add("goToInputPage", () => {
    cy.get(mainPageElements.componentsList, {timeout: 60000}).contains('Input').click()
})

Cypress.Commands.add("goToAssessmentBlock", () => {
    cy.get(mainPageElements.componentsList, {timeout: 60000}).contains('Assessment').click()
})
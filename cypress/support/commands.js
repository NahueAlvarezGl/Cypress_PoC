import 'cypress-file-upload';
import elements from '../pages/main/elements'
import mainPageElements from '../pages/main/mainPageElements'

Cypress.Commands.add("goToBasicExample", () => {
    cy.get(elements.HomebarButton).click()
    cy.get(elements.StartPractisingButton).click()
})

Cypress.Commands.add("goToDocumentationPage", () => {
    cy.get(mainPageElements.documentationLink).click() 
})

Cypress.Commands.add("goToInputPage", () => {
    cy.visit(Cypress.config().inputUrl)
})

Cypress.Commands.add("text", { prevSubject: true}, (subject, options) => {
    return subject.text();
  });

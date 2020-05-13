import accordionElements from "../pages/main/accordionBlockElements.json"

describe("ALP - Blacksmith 2", () => {
    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url + '/accordion-doc', {timeout: 60000});
        cy.url().should('include', 'accordion-doc');
        cy.eyesOpen();
    })

    afterEach( () => {
        cy.eyesClose();
    })

    it("- all accordions node are closed by default", () => {
        cy.contains("Accordion Block");

        cy.contains("Default accordion");

        cy.eyesCheckWindow({
            tag: 'User sees all nodes closed', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        })
    })
})
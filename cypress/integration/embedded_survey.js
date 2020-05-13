import embeddedSurveyElements from "../pages/main/embeddedSurveyElements.json"

describe('Embedded Survey Tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url +  '/embedded-survey-doc', {timeout: 60000});
        cy.url().should('include', 'embedded-survey-doc');
        cy.eyesOpen();
    })

    afterEach(() => {
        cy.eyesClose();
    })

    it('by default the form submit button is in a deactivated state', () => {

        cy.contains('Embedded Survey');

        cy.contains('Send'); 

        cy.eyesCheckWindow({
            tag: 'Send button is in deactivated state', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });
    })

    it('After the user selects all required fields the send button is in its active state', () => {
        cy.contains('Embedded Survey');

        cy.contains('Send'); 

        cy.eyesCheckWindow({
            tag: 'Send button is in deactivated state', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });

        cy.get(embeddedSurveyElements.answersFirstGroup).first().check({force: true})

        cy.get(embeddedSurveyElements.answersSecondGroup).first().check({force: true})

        cy.eyesCheckWindow({
            tag: 'Send button is in activated state', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });
    })

    it('user is able to submit the form once all required radio button options are filled', () => {
        cy.contains('Embedded Survey');

        cy.contains('Send'); 

        cy.eyesCheckWindow({
            tag: 'Send button is in deactivated state', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });

        cy.get(embeddedSurveyElements.answersFirstGroup).first().check({force: true})

        cy.get(embeddedSurveyElements.answersSecondGroup).first().check({force: true})

        cy.eyesCheckWindow({
            tag: 'Send button is in activated state', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });

        cy.get(embeddedSurveyElements.sendButton).click()

        cy.eyesCheckWindow({
            tag: 'Form submitted', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });
    })
})
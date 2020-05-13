import assestmentBlockElements from "../pages/main/assestmentBlockElements.json"

describe('Assesment Block tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url + '/assessment-doc', {timeout: 60000})
        cy.url().should('include', 'assessment-doc')
        cy.eyesOpen();
    })

    afterEach(() => {
        cy.eyesClose()
    })

    it('the user is able to select an "active" radio button', () => {
        cy.contains('When you take out a student loan');

        // Add checkpoint #1 (This is test step #1)
        cy.eyesCheckWindow({
            tag: 'Before Select', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: assestmentBlockElements.assesmentQuestionsSection
            }
        });

        cy.get(assestmentBlockElements.correctAnswerRadioButton).as('radioButton');

        cy.get('@radioButton', {timeout: 60000}).check({force: true});

        // Add checkpoint #2 (This is test step #2)
        cy.contains('Correct');

        cy.eyesCheckWindow({
            tag: 'Radio Button was selected', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: assestmentBlockElements.assesmentQuestionsSection
            }
        });

    })

    it('user is able to select a radio button and get its corresponding response feedback message', () => {
        cy.contains('Assessment Block');

        cy.get(assestmentBlockElements.correctAnswerRadioButton).as('correctRadioButton');
        cy.get('@correctRadioButton', {timeout: 60000}).check({force: true});

        cy.contains('Correct');

        cy.eyesCheckWindow({
            tag: 'Correct',
            target: 'region',
            selector: {
                type: 'css',
                selector:  assestmentBlockElements.feedbackMessageContainer
            }
        });

        cy.get(assestmentBlockElements.incorrectAnswerRadioButton).as('incorrectRadioButton');
        cy.get('@incorrectRadioButton', {timeout: 60000}).check({force: true});

        cy.contains('Incorrect');

        cy.eyesCheckWindow({
            tag: 'Incorrect Message',
            target: 'region',
            selector: {
                type: 'css',
                selector: assestmentBlockElements.feedbackMessageContainer
            }
        });

    })
})
import flipcardElements from "../pages/main/flipcardElements.json"

describe('Flipcard Tests', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url + '/flipcard-doc', {timeout: 60000});
        cy.url().should('include', 'flipcard-doc');
        //Applitools Test begins
        cy.eyesOpen();
    
    })

    afterEach(() => {
        //Applitools Test finishes
        cy.eyesClose();
    })

    it("Component has a back and front-side, user can access each side via a click to the component to reveal the individual side's unique content", () => {
        cy.contains("Front of flipcard");

        cy.get(".block-list h2").click();

        //Add checkpoint #1 (This is test step #1)
        cy.eyesCheckWindow({
            tag: 'Flipcard front side', 
            target: 'region',
            // selector: {
            //     type: 'css',
            //     selector: '#page-container>.block-list'
            // }
            layout: [
                { selector: '#page-container>.block-list' }
            ]
        });

        cy.get(flipcardElements.flipButton).first().click();

        cy.get(".block-list h2").click();

        cy.contains('Back of flip Card');

        cy.eyesCheckWindow({
            tag: 'Flipcard back side', 
            target: 'region',
            // selector: {
            //     type: 'css',
            //     selector: '#page-container>.block-list'
            // }
            layout: [
                { selector: '#page-container>.block-list' }
            ]
        });
        
    })
})
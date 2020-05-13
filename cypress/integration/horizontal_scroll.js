import horizontalScrollElements from "../pages/main/horizontalScrollElements.json"

describe('Horizontal-Scroll tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url + '/horizontal-scroll-doc', {timeout: 60000});
        cy.url().should('include', 'horizontal-scroll-doc');
        cy.eyesOpen();
    })

    afterEach( () => {
        cy.eyesClose();
    })

    it('User is able to horizontally scroll within the component to see all of the embedded content', () => {
        cy.contains("Default configuration");

        cy.get(".block-list h3").first().click();

        cy.eyesCheckWindow({
            tag: 'User sees horizontal scroll component for the first time', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });

        cy.get(horizontalScrollElements.horizontalExample1).scrollTo('right', { duration: 2000 });

        cy.contains("With Cards");

        cy.get(".block-list h3").first().click();

        cy.eyesCheckWindow({
            tag: 'User scrolls using the component', 
            target: 'region', 
            selector: {
                type: 'css',
                selector: '#page-container>.block-list'
            }
        });
    })
})
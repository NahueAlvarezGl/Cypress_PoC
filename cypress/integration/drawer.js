import drawerElements from '../pages/main/drawerElements'; 

describe('Drawer Component tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().blacksmith2Url + '/drawer-doc', {timeout: 1000000})
        cy.url().should('include', 'drawer-doc')
    })

    drawerElements.forEach(element => {
    it('Type ' + element.position + ' - Clicking the component button will add a drawer at the top of the browser window', function ()  {
        
            cy.eyesOpen();

            cy.contains('Drawer Component');

            // Add checkpoint #1 (This is test step #1)
            cy.eyesCheckWindow({
                tag: 'Before clicking top drawer button', 
                target: 'region', 
                selector: {
                    type: 'css',
                    selector: '#page-container>.block-list'
                }
            });

            cy.get(element.locator).as('drawerButton');

            cy.get('@drawerButton', {timeout: 60000}).click({force: true});

            // Add checkpoint #2 (This is test step #2)
            cy.contains('Drawer');

            cy.eyesCheckWindow(element.position + ' Drawer selected');

            //End Test
            cy.eyesClose();
        })
    })
})
// @ts-nocheck
import "cypress-localstorage-commands"
import 'cypress-iframe'

export default class Base {

    openUrl(pathUrl) {
        cy.visit(pathUrl)
        return this;
    }

    validateH1Title(titleText) {
        cy.get('h1', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }

    validateH2Title(titleText) {
        cy.get('h2', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }

    validateH3Title(titleText) {
        cy.get('h3', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }
}
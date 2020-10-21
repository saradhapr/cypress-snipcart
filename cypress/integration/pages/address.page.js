// @ts-nocheck
import Base from './base.page';

const nextButton = '[id="snipcart-next"]'
const name = '[id="snip-name"]'
const street = '[id="snip-address1"]'
const city = '[id="snip-city"]'
const postalCode = '[id="snip-postalCode"]'
const email = '[id="snip-email"]'

class Address extends Base {
    fillForm() {
        cy.get(name).type('Saradha', { force: true })
        cy.get(street).type('Wood street', { force: true })
        cy.get(city).type('London', { force: true })
        cy.get(postalCode).type('WC1N 2NX', { force: true })
        cy.get(email).type('123@gmail.com', { force: true } )
    }

    clickNextButton(text) {
        cy.get(nextButton, { timeout: 30000 })
          .should('be.visible')
          .contains(text)
          .click({force: true})
    }

}



export default new Address();
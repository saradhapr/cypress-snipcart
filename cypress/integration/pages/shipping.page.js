// @ts-nocheck
import Base from './base.page';

const shipMethods = '[id="snipcart-shippings-list"]'
const nextStep = '[id="snipcart-paymentmethod-pay"]'
const billingAdd = 'div.snip-cols.snip-layout__content.snip-layout__content--bordered > div:nth-child(1) > h2'
const shippingAdd = 'div.snip-cols.snip-layout__content.snip-layout__content--bordered > div:nth-child(2) > h2'
const paymentInfo = 'div.snip-cols.snip-layout__content.snip-layout__content--bordered > div:nth-child(3) > h2'
const totalAmount = '[id="snipcart-total"]'
const placeOrder = 'a.js-submit.snip-btn.snip-btn--highlight.snip-btn--right' 
const footer = '[id="snipcart-footer"]'
const orderNumber = '[id="snipcart-title"]'
const greenMessage = '[id="snipcart-flash-messages"]'

class Shipping extends Base {
    clickNextButton(text) {
        cy.get(nextStep, { timeout: 30000 })
          .should('be.visible')
          .contains(text)
          .click({force: true})
    }

    validateShippingMethods() {
        cy.get(shipMethods)
            .contains('United States')
        cy.get(shipMethods)
            .contains('$ 10.00')
        cy.get(shipMethods)
            .contains('Canada')
        cy.get(shipMethods)
            .contains('$ 15.00')
        cy.get(shipMethods)
            .contains('Worldwide')
        cy.get(shipMethods)
            .contains('$ 20.00')
    }

    validateConfirmOrder(total) {
        cy.get(billingAdd)
          .contains('Billing address')
        cy.get(shippingAdd)
          .contains('Shipping address')
        cy.get(paymentInfo)
          .contains('Payment information')
        cy.get(totalAmount)
          .contains(total) 
        cy.get(footer).scrollIntoView()
          .should('be.visible')
        cy.get(placeOrder, { timeout: 30000 })
          .should('be.visible')
          .contains('Place Order')
          .click({force: true})
    }

    orderPlaced() {
        cy.get(orderNumber)
          .should('be.visible')
        cy.get(greenMessage)
          .should('be.visible')
    }
}

export default new Shipping();
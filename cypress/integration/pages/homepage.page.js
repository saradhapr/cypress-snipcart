// @ts-nocheck
import Base from './base.page';

const bowties = '#___gatsby > div > div > div:nth-child(2) > h3 > a'
const colorDropdown = '[id="Color"]'
const buyButton = 'a#buyButton.snipcart-add-item.buyBtn'
const productUrl = 'https://snipcart-react-gatsby.netlify.app/bow-ties/#!/cart'
const loginUrl = 'https://snipcart-react-gatsby.netlify.app/bow-ties/#!/login'
const subTotal = '[id="snipcart-amount"]'
const nextButton = '[id="snipcart-actions"]'
const productColor = '[id="snipcart_custom_Color"]'
const incQuantity = '#snipcart-items-list > tr.snip-table__item > td.snip-table__cell--center.snip-table__small-col > div > a.snip-quantity-trigger__btn.snip-quantity-trigger__btn--add'
const unitPrice = '#snipcart-items-list > tr.snip-table__item > td.snip-table__cell--right.snip-table__cell--bold.snip-table__small-col > span'
const totalPrice = '#snipcart-items-list > tr.snip-table__item > td.snip-table__cell--right.snip-table__cell--highlight.snip-table__small-col'
const signIn = '#snipcart-login-form-container > h2'
const createLogin = '[id="snipcart-newaccount-form-container"]'
const guestCheckout = '[id="snipcart-guest-checkout-container"'
const checkoutButton = '[id="snipcart-guest-checkout"]'

class HomePage extends Base {

    clickBowties() {
        cy.get(bowties).click()
        return this;
    }

    clickColorDropdown(text) {
        cy.get(colorDropdown)
          .contains("Blue Red")
        cy.get(colorDropdown)
          .contains("White Blue")
        cy.get(colorDropdown)
          .contains("White Gray")
        cy.get(colorDropdown).select(text).wait(500)
        return this;
    }

    clickBuyButton() {
        cy.get(buyButton, { timeout: 30000 })
          .should('be.visible')
          .contains('Buy for')
          .click({force: true}, { timeout: 30000 })
        return this;
    }

    validatesubTotal(total) {
        cy.get(subTotal, { timeout: 30000 })
          .should('be.visible')
          .contains(total)
        return this;
    }

    validateColor(color) {
        cy.get(productColor, { timeout: 30000 })
          .should('be.visible')
          .contains(color)
        return this;
    }

    clickIncQuantity() {
        cy.get(incQuantity, { timeout: 30000 })
          .should('be.visible')
          .click({force: true})
        return this;
    }
    
    validateUnitPrice(price) {
        cy.get(unitPrice, { timeout: 30000 })
          .should('be.visible')
          .contains(price)
        return this;
    }

    validateTotalPrice(total) {
        cy.get(totalPrice, { timeout: 30000 })
          .should('be.visible')
          .contains(total)
        return this;
    }

    clickNextButton(text) {
        cy.get(nextButton, { timeout: 30000 })
          .should('be.visible')
          .contains(text)
          .click({force: true})
    }

    validateLoginPage() {
        cy.get(signIn)
          .contains('Sign in')
        cy.get(createLogin)
          .contains('Create a login')
        cy.get(guestCheckout)
          .contains('Checkout as a guest')
        cy.get(checkoutButton)
          .click({force: true})
    }

    clickCheckoutButton(text) {
      cy.get(checkoutButton, { timeout: 30000 })
          .should('be.visible')
          .contains(text)
          .click({force: true})
    }

    verifyProductUrl() {
        cy.url().then(($url) => {
          if($url.includes(productUrl)) {
              cy.log("Yes")
          } else  {
              cy.log("No")
            }
          })
        return this;
    }

    verifyLoginUrl() {
      cy.url().then(($url) => {
        if($url.includes(loginUrl)) {
            cy.log("Yes")
        } else  {
            cy.log("No")
          }
        })
      return this;
  }

}

export default new HomePage();
//@ts-nocheck
import homePage from '../pages/homePage.page'
import addressPage from '../pages/address.page'
import shippingPage from '../pages/shipping.page'

describe('Snipcart - Scenario 2', () => {
    beforeEach(() => {
        homePage
            .openUrl("https://snipcart-react-gatsby.netlify.app")
            .validateH1Title("React & Gatsby shop powered by Snipcart")
    })

    it('Order Place Journey', function () {
        homePage
            .clickBowties()                             /*  Buy any product and go to My cart  */
            .validateH3Title("Color")
            .clickColorDropdown("White Blue")
            .clickBuyButton()                           /* Add Product */
            .validateH2Title("My cart")
            .clickIncQuantity()                         /* Increase Product Quantity */
            .validateUnitPrice("$ 7.00")
            .validateTotalPrice("$ 14.00")              /* Assert the total price */
            .clickNextButton("Next step")
        homePage
            .validatesubTotal("$ 14.00")                /* Subtotal validation */
            .verifyLoginUrl()                           /* Verify the URL contains Login */
            .validateLoginPage()                        /* Guest checkout, login, new account containers validation */
        addressPage.fillForm()                          /* Fill the address details */
        addressPage.clickNextButton("Next step")
        homePage
            .validatesubTotal("$ 14.00")                
        shippingPage
            .validateShippingMethods()                  /* Shipping method & Prices validation */
        addressPage.clickNextButton("Next step")
        homePage
            .validatesubTotal("$ 24.00")
        shippingPage
            .clickNextButton("Next step")
        shippingPage
            .validateConfirmOrder("$ 25.20")            /* Billing/Shipping address and total amount validation */
        shippingPage
            .orderPlaced()                              /* Order number & Green Message validation*/
    })
})
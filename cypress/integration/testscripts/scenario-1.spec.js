//@ts-nocheck
import homePage from '../pages/homePage.page'

describe('Snipcart - Scenario 1', () => {
    beforeEach(() => {
        homePage
            .openUrl("https://snipcart-react-gatsby.netlify.app")
            .validateH1Title("React & Gatsby shop powered by Snipcart")
    })

    it('Buy Product', function () {
        expect(true).to.equal(true)

        homePage
            .clickBowties()                      /* Selection of Product */
            .validateH3Title("Color")
            .clickColorDropdown("White Gray")    /* Validate all colours in a product */
            .clickBuyButton()
            .validateH2Title("My cart")
            .validatesubTotal("$ 7.00")
        homePage
            .verifyProductUrl()                  /* Verify the URL contains product name */
    })
})
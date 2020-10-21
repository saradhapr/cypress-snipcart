// @ts-nocheck
describe('API request', function() {
    
    it('GET - Latest Rate with Symbols', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/latest?symbols=USD'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })

    it('GET - Latest Rate with Base', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/latest?base=USD'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })

    it('GET - Latest Rate with Symbols & Base', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/latest?base=USD&symbols=GBP'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })

    it('GET - Specific Rate with Symbols', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/2010-01-12?symbols=USD'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })

    it('GET - Specific Rate with Base', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/2010-01-12?base=USD'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })

    it('GET - Specific Rate with Symbols & Base', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.ratesapi.io/api/2010-01-12?base=USD&symbols=GBP'
        }).then(function(response){   
        
        expect(response.status).to.eq(200)
        })
    })
})

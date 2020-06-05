/// <reference types="cypress" />

describe('First Test',function() {
    it('Successful Login', () => {
    cy.visit('https://www.moneysupermarket.com/my-account/sign-in/')
    cy.get('#email').type("bothees@gmail.com")
    cy.get('#password').type("Autotest2018")
    cy.get('#submit').click()
    cy.get('.sign-out__user-name').should('contain.text', 'Hi Boothiraj')
})
})

const list = ['Home','History','Profile','Settings']

describe('Check Quote History',function() {
    it('verify All the options available',() => {
        cy.get('.navigation-bar__item-link').each(($menu,index,$list) => {
           const t = $list.get(index).innerText
           expect(t).to.equal(list[index])
        })    

    })
})   

describe('Profile information',function() {
    it('verify Profile information',() => {
        cy.get('.navigation-bar__item-link').each(($menu,index,$list) => {
            if($list.get(index).innerText === list[2]) {
                 $list.get(index).click()       
            }
        })

        
        cy.get('.person-details__name').then(($input) => {
            expect($input[0].innerText).to.eq('Boothiraj Palanisamy')
        })

    })
})    
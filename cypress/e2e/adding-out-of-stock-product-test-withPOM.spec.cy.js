import { JuiceShopHomePage } from '../pages/juice-shop.po.js'
import { LoginPage } from '../pages/login.po.js'

describe('Juice Shop', () => {
  const juiceShopHomePage = new JuiceShopHomePage()
  const loginPage = new LoginPage()

  context('OutOfStock', () => {
    it('I should not be able to put a product that is out of stock in my cart', () => {
      juiceShopHomePage.visit()
      juiceShopHomePage.acceptCookies()
      juiceShopHomePage.closeWelcomeMessage()
      loginPage.visit()
      loginPage.login('testuser25042023@gmail.com', 'testuser25042023')
      juiceShopHomePage.searchProduct('OWASP Juice Shop "King of the Hill" Facemask')
      cy.get('.btn-basket').click()
      // Assert that message is appearing that I can not add an out of stock product to the cart
      cy.get('.errorBar', { timeout: 10000 }).should('be.visible')
    })
  })
})
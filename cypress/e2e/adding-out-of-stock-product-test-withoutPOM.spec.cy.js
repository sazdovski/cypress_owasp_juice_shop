describe('Juice Shop', () => {
  context('OutOfStock', () => {
    it('I should not be able to put a product that is out of stock in my cart', () => {

    //LOGIN
    cy.visit('http://juice-shop.herokuapp.com/#/')
    //Accept cookies button
    cy.get('.cc-dismiss').click();
    //Remove welcome message
    cy.get('.close-dialog').click();
    //Account button, using aria locator, because there aren't any specific classes on that button.
    cy.get('[aria-label="Show/hide account menu"]').click();
    //Access the Log in page
    cy.get('#navbarLoginButton').click();

    //Insert credentials and click login
    cy.get('#email').type('testuser25042023@gmail.com')
    cy.get('#password').type('testuser25042023')
    cy.get('#loginButton').click()

    //Going back to the homescreen
    cy.get('[aria-label="Back to homepage"]').click();
     //    Enable to search button
     cy.get('.mat-search_icon-search').click()
     //    Input product name and press enter button
     cy.get('.mat-input-element').type('OWASP Juice Shop "King of the Hill" Facemask').type('{enter}')
     //Add product to cart
     cy.get('.btn-basket').click();
     //Assert that message is appearing that I can not add an out of stock product to the cart
      cy.get('.errorBar', { timeout: 10000 }).should('be.visible');

    })

  })
})
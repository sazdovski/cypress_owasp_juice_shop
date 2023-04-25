describe('Juice Shop', () => {
  context('Basket', () => {
    it('Adds a product to the basket', () => {

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

    //ADDING PRODUCT TO SHOPPING CART

    //    Enable to search button
    cy.get('.mat-search_icon-search').click()
    //    Input product name and press enter button
    cy.get('.mat-input-element').type('Apple Juice').type('{enter}')

    //Add product to cart
    cy.get('.btn-basket').click();
    //Assert that message is appearing for successful adding to the cart
    cy.get('.confirmBar', { timeout: 10000 }).should('be.visible');


     //Open the shopping cart
    cy.get('[aria-label="Show the shopping cart"]').click();
    //Assert that the pages loads and the cart is visible
    cy.get('.checkout-button', { timeout: 10000 }).should('be.visible');

    //REMOVING PRODUCT FROM SHOPPING CART
    //Clicking the remove button using css locator because there are not any ids or classes on the button
    cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-remove.mat-column-remove.ng-star-inserted > button').click();
    //Assert that the product is successfully removed. The checkout button becomes unclickable when there aren't any products in the cart.
    cy.get('.checkout-button').should('be.disabled')



    })

  })
})
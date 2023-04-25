export class JuiceShopHomePage {
  constructor() {
    this.acceptCookiesButton = '.cc-dismiss';
    this.welcomeMessageCloseButton = '.close-dialog';
    this.accountButton = '[aria-label="Show/hide account menu"]';
    this.loginButton = '#navbarLoginButton';
    this.searchButton = '.mat-search_icon-search';
    this.searchInput = '.mat-input-element';
    this.addToCartButton = '.btn-basket';
    this.outOfStockErrorMessage = '.errorBar';
    this.backToHomePageButton = '[aria-label="Back to homepage"]';
  }

  visit() {
    cy.visit('http://juice-shop.herokuapp.com/');

  }

  acceptCookies() {
    cy.get(this.acceptCookiesButton).click();
  }

  closeWelcomeMessage() {
    cy.get(this.welcomeMessageCloseButton).click();
  }

  openAccountMenu() {
    cy.get(this.accountButton).click();
  }

  navigateToLoginPage() {
    cy.get(this.loginButton).click();
  }

  searchProduct(productName) {
    cy.get(this.searchButton).click();
    cy.get(this.searchInput).type(productName).type('{enter}');
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
  }

  assertOutOfStockError() {
    cy.get(this.outOfStockErrorMessage, { timeout: 10000 }).should('be.visible');
  }

  navigateToHomePage() {
    cy.get(this.backToHomePageButton).click();
  }
}

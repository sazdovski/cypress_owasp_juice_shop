export class LoginPage {
  constructor() {
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.loginButton = '#loginButton';
  }

  visit() {
    cy.visit('/#/login');
  }

  login(email, password) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
}
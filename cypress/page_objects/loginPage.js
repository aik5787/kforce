class LoginPage {
  get userNameInput() {return cy.get("#UserName")}
  get passwordInput() {return cy.get("#Password")}
}
export default new LoginPage();

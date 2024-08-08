import loginValidationText from "../../fixtures/loginValidationText.json";
import invalidLoginCredentials from "../../fixtures/invalidLoginCredentials.json";
import loginPage from "../../page_objects/loginPage";

describe("Login", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("https://kforcegreatstart.estaff365.com/Account/Login?ReturnUrl=%2f");
  });

  it("Should not login without filling in required fields", () => {
    cy.contains("Log in").click();

    cy.contains(loginValidationText.userNameRequired).should("be.visible");
    cy.contains(loginValidationText.userPasswordRequired).should("be.visible");
  });

  it("Should not login with invalid credentials", () => {
    loginPage.userNameInput.type(invalidLoginCredentials.userName);
    loginPage.passwordInput.type(invalidLoginCredentials.password);

    cy.contains("Log in").click();

    cy.contains(loginValidationText.incorrectCredentials).should("be.visible");
  });
});

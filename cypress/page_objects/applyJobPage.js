class ApplyJobPage {
  get firstNameInput() {return cy.get('#firstName')}
  get lastNameInput() {return cy.get('#lastName')}
  get emailInput() {return cy.get('#emailAddress')}
  get verifyEmailInput() {return cy.get('#emailAddressVerify')}
  get phoneInput() {return cy.get('#phoneNumberAll')}
  get stateSelect() {return cy.get('#state')}
  get zipInput() {return cy.get('#postalCode')}
  get countrySelect() {return cy.get('#countryID')}
  get chooseFile() {return cy.get('[name="uploadFileSystemResume"]')}
  get elegibilitySelect() {return cy.get('input[name="eligibility"][value="AuthorizedForAny"]')}
  }
  export default new ApplyJobPage();
import homePage from "../../page_objects/homePage";
import jobDetails from "../../fixtures/jobDetails.json";
import searchJobsPage from "../../page_objects/searchJobsPage";
import jobPage from "../../page_objects/jobPage";
import applyJobPage from "../../page_objects/applyJobPage";

describe("Job Application", () => {
  before(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("Should successfully submit a job application", () => {
    homePage.findWorkLink.click();
    homePage.searchJobsLink.click({ force: true });

    searchJobsPage.searchByJobInput.type(jobDetails.jobTitle);
    searchJobsPage.searchSubmitIcon.click();
    searchJobsPage.jobLink.eq(0).click();

    jobPage.applyButton.click();

    applyJobPage.firstNameInput.type(jobDetails.firstName);
    applyJobPage.lastNameInput.type(jobDetails.lastName);
    applyJobPage.emailInput.type(jobDetails.email);
    applyJobPage.verifyEmailInput.type(jobDetails.email);
    applyJobPage.phoneInput.type(jobDetails.phone);
    applyJobPage.stateSelect.select(jobDetails.state);
    applyJobPage.zipInput.type(jobDetails.zip);
    applyJobPage.countrySelect.select(jobDetails.country);
    applyJobPage.chooseFile.attachFile("files/resume.pdf");
    applyJobPage.elegibilitySelect.check();

    applyJobPage.firstNameInput.should("have.value", jobDetails.firstName);
    applyJobPage.lastNameInput.should("have.value", jobDetails.lastName);
    applyJobPage.emailInput.should("have.value", jobDetails.email);
    applyJobPage.verifyEmailInput.should("have.value", jobDetails.email);
    applyJobPage.phoneInput.should("have.value", jobDetails.phone);
    applyJobPage.stateSelect.should("have.value", jobDetails.state);
    applyJobPage.zipInput.should("have.value", jobDetails.zip);
    applyJobPage.countrySelect.should("have.value", jobDetails.country);
    applyJobPage.elegibilitySelect.should("be.checked");
  });
});

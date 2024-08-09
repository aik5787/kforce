import findOfficePage from "../../page_objects/findOfficePage";
import homePage from "../../page_objects/homePage";
import findOfficeDetails from "../../fixtures/findOfficeDetails.json";

describe("FindOffice", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("Should find an office by zipcode", () => {
    homePage.findOfficeLink.click({ force: true });

    findOfficePage.searchZipInput.type(findOfficeDetails.zip);
    cy.contains("button", "Find An Office").click();

    findOfficePage.map.should("exist");
    cy.contains(findOfficeDetails.location).should("be.visible");
    cy.contains(findOfficeDetails.address).should("be.visible");
  });
});

class SearchJobsPage {
  get searchByJobInput() {return cy.get('[placeholder="Search by Job Title or Skill"]')}
  get searchSubmitIcon() {return cy.get('[class="search-icon submitIcon"]')}
  get jobLink() {return cy.get('[class="linkForJob"]')}
}
export default new SearchJobsPage();

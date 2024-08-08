class HomePage {
  get findWorkLink() {return cy.get('[class="desktop-dropdown upper-open-1"]')}
  get searchJobsLink() {return cy.get('.desktop-dropdown [href="/find-work/search-jobs/"]')}
  get findOfficeLink() {return cy.get('.mobile-inner [href="/contact-us/"]')}
}
export default new HomePage();

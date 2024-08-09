class FindOfficePage {
  get searchZipInput() {return cy.get("#address")}
  get map() {return cy.get("#map_canvas")}
}
export default new FindOfficePage();

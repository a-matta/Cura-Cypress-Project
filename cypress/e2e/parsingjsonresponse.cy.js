describe("Parsing Json Response", () => {
  it("Parsing Json Response", () => {
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log("Response Status: " + response.status);
      cy.log("Status response", response.body);
      expect(response.body[0].id).to.equal(1);
      expect(response.body[0].title).to.equal(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      );
      expect(response.body[0].price).to.equal(109.95);
    });
  });
});

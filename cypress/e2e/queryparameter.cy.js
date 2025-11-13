describe("Query Parameters", () => {
  const queryParam = { page: 2 };

  it("Passing Query Paramters", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      qs: queryParam,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
    });
  });
});

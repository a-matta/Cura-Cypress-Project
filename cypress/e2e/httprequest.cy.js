describe("HTTP Requests", () => {
  it("GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(10);
        expect(response.body[0].name).to.eq("Leanne Graham");
      }
    );
  });

  it("POST CALL", () => {
    const requestBody = {
      title: "My Test Post",
      body: "This is a test post created via Cypress.",
      userId: 1,
    };

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: requestBody,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      expect([200, 201]).to.include(response.status);
      expect(response.body).to.include({
        title: requestBody.title,
        body: requestBody.body,
        userId: requestBody.userId,
      });
    });
  });
});

it("PUT CALL", () => {
  const requestBody = {
    id: 1,
    title: "Update Post Title",
    body: "This is a test post created via Cypress.",
    userId: 1,
  };

  cy.request({
    method: "PUT",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    body: requestBody,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include({
      title: requestBody.title,
      body: requestBody.body,
    });
  });
});

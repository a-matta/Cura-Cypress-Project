describe("HTTP Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("GET /users returns list of users", () => {
    cy.request("GET", `${baseUrl}/users`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(10);
      expect(response.body[0].name).to.eq("Leanne Graham");
    });
  });

  it("POST /posts creates a new post", () => {
    const requestBody = {
      title: "My Test Post",
      body: "This is a test post created via Cypress.",
      userId: 1,
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/posts`,
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
      expect(response.body.userId).to.eq(requestBody.userId);
    });
  });

  it("PUT /posts/1 updates a post", () => {
    const requestBody = {
      id: 1,
      title: "Update Post Title",
      body: "This is a test post created via Cypress.",
      userId: 1,
    };

    cy.request({
      method: "PUT",
      url: `${baseUrl}/posts/1`,
      body: requestBody,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include({
        title: requestBody.title,
        body: requestBody.body,
        userId: requestBody.userId,
      });
      expect(response.body.userId).to.eq(requestBody.userId);
    });
  });

  it("DELETE /posts/1 deletes a post", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/posts/1`,
    }).then((response) => {
      // JSONPlaceholder returns 200 on delete
      expect(response.status).to.eq(200);
    });
  });
});

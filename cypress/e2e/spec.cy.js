describe("Cura Login", () => {
  const baseUrl = "https://katalon-demo-cura.herokuapp.com";

  it("CURA Healthcare Service - Appointment Flow", () => {
    cy.visit(baseUrl);
    cy.contains("Make Appointment").should("be.visible");

    //Navigate To Login Page
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();

    // Check url should have appointment in url
    cy.get("#combo_facility").select("Hongkong CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").check();
    cy.get("#radio_program_medicare").check();
    cy.get("#txt_visit_date").click();
    cy.get(".datepicker-days tbody tr ").contains("30").click();
    cy.get("#txt_comment").type("This is a comment");
    cy.get("#btn-book-appointment").click();

    //Asserting above apointment
    cy.contains("Appointment Confirmation").should("be.visible");
    cy.get("#facility").should("have.text", "Hongkong CURA Healthcare Center");
    cy.get("#hospital_readmission").should("have.text", "Yes");
    cy.get("#program").should("have.text", "Medicare");
    cy.get("#visit_date").should("have.text", "30/10/2025");
    cy.get("#comment").should("have.text", "This is a comment");
  });
});

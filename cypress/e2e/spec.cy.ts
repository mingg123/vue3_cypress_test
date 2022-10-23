describe("My First Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get(".action-focus")
      .focus()
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");

    cy.get(".action-blur")
      .type("About to blur")
      .blur()
      .should("have.class", "error")
      .prev()
      .should("have.attr", "style", "color: red;");

    cy.get(".action-clear")
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");

    cy.get(".action-form").find('[type="text"]').type("HALFOFF");
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
});

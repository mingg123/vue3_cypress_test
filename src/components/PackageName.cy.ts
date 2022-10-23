import PackageName from "./PackageName.vue";

describe("<PackageName>", () => {
  it("mounts", () => {
    cy.mount(PackageName);
  });

  const packageNameSelector = "[data-cy=packageName_input]";

  it("stepper should default to null", () => {
    cy.mount(PackageName);
    cy.get(packageNameSelector).should("have.text", "");
  });

  it("packageName should value", () => {
    cy.mount(PackageName);
    cy.get(packageNameSelector)
      .type("게임패키지")
      .should("have.value", "게임패키지");
  });
});

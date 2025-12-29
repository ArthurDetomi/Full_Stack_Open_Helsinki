describe("Blog app", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      name: "Matti Luukkainen",
      username: "mluukkai",
      password: "salainen",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);

    cy.visit("");
  });

  it("Login form is shown", () => {
    cy.contains("log in to application");
    cy.contains("login");
    cy.contains("username");
    cy.contains("password");
  });
});

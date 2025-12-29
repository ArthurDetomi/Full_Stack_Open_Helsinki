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

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("mluukkai");
      cy.get("#password").type("salainen");
      cy.get("#login-button").click();

      cy.contains("Matti Luukkainen logged in");
      cy.contains("logged with successfully!");
    });

    it("fails with wrong credentials", function () {
      cy.get("#username").type("mluukkai");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();

      cy.contains("wrong username or password");
      cy.get(".error")
        .should("contain", "wrong username or password")
        .and("have.css", "color", "rgb(255, 0, 0)")
        .and("have.css", "border-style", "solid");

      cy.get("html").should("not.contain", "Matti Luukkainen logged in");
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "mluukkai", password: "salainen" });
    });

    it("A blog can be created", function () {
      cy.contains("new blog").click();

      cy.get("#title").type("a blog created by cypress");
      cy.get("#author").type("Cypress");
      cy.get("#url").type("cypress.com");

      cy.get("#create-blog-button").click();

      cy.contains("a blog created by cypress");
    });

    describe("and a blog exists", function () {
      beforeEach(function () {
        cy.createBlog({
          title: "First blog",
          author: "Cypress",
          url: "first.com",
        });
        cy.createBlog({
          title: "Second blog",
          author: "Cypress",
          url: "second.com",
        });
        cy.createBlog({
          title: "Third blog",
          author: "Cypress",
          url: "third.com",
        });
      });

      it("can like one of the blogs", function () {
        cy.contains("view").first().click();
        cy.contains("like").click();
        cy.contains("likes 1");
      });

      it("can delete one of the blogs", function () {
        cy.contains("view").first().click();
        cy.contains("delete").click();

        cy.contains("blog First blog by Cypress deleted successfully!");
      });
    });
  });
});

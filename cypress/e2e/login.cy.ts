/// <reference types="cypress" />

describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("/login"); // Adjust based on your app's route
  });

  it("should show error for empty fields", () => {
    cy.get('button[type="submit"]').click();
    cy.contains("Fields cannot be empty").should("be.visible");
  });

  it("should show error for incorrect credentials", () => {
    cy.get('input[name="username"]').type("wrongUser");
    cy.get('input[name="password"]').type("wrongPass");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("should log in successfully", () => {
    cy.get('input[name="username"]').type("testUser");
    cy.get('input[name="password"]').type("testPass");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard"); // Adjust based on redirection
  });
});

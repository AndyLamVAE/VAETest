import homePage from "../../pages/homePage";

describe("Test Checkout page functionality", () => {
  it("should add product and go to checkout page", () => {

    //Go to Luma home page, add item to cart, click cart icon , and then click Proceed to Checkout
    homePage.visit();
    homePage.addTankToCart();
    homePage.verifyItemAdded();
    homePage.clickCartIcon();
    homePage.clickProceedToCheckout();

    // Validate user is on the checkout page
    cy.url().should("include", "/checkout");
    cy.get("h1").should("contain", "Checkout");

    // Wait for  the shipping options to load and then select one
    cy.get('input[name="ko_unique_1"]', { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });

    
    cy.get("#customer-email").clear({ force: true });

    cy.get("button.continue").click();

    // Validate the error messages on required fields
    cy.get("#customer-email-error").should(
      "contain",
      "This is a required field."
    );

    cy.get('[name="firstname"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="lastname"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="street[0]"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="city"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="region_id"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="postcode"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");

    cy.get('[name="telephone"]')
      .parent()
      .find('span[data-bind="text: element.error"]')
      .should("contain.text", "This is a required field.");
  });
});

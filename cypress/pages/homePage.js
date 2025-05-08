class HomePage {
  visit() {
    cy.visit("https://magento.softwaretestingboard.com/");
  }

  clickCreateAccountLink() {
    cy.get("ul.header li a").contains("Create an Account").click();
  }

  verifyHomePageLoaded() {
    cy.url().should("eq", "https://magento.softwaretestingboard.com/");
    cy.get("body").should("be.visible");
  }

  verifyItemAdded() {
    cy.get(".message-success").should("contain", "You added");
  }

  clickCartIcon() {
    cy.get("a.action.showcart").click();
  }

  addTankToCart() {
    cy.contains(".product-item", "Breathe-Easy Tank").click();
    cy.get('div[option-label="M"]').click();
    cy.get('div[option-label="Purple"]').click();
    cy.get("button#product-addtocart-button").click();
  }

  clickProceedToCheckout() {
    cy.get("div.minicart-wrapper").within(() => {
    cy.contains("button", "Proceed to Checkout").click();
    });
  }
}

export default new HomePage();

class CreateAccountPage {
  visit() {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  }

  addFirstName(firstName) {
    cy.get("#firstname").type(firstName);
  }

  addLastName(lastName) {
    cy.get("#lastname").type(lastName);
  }

  addEmailField(email) {
    cy.get("#email_address").type(email);
  }

  addPasswordField(password) {
    cy.get("#password").type(password);
  }

  addConfirmPasswordField(password) {
    cy.get("#password-confirmation").type(password);
  }

  clickCreateAccountButton() {
    cy.get('button[title="Create an Account"]').click();
  }

  verifySuccessMessage() {
    cy.get(".message-success").should("contain", "Thank you for registering");
  }

  verifyWelcomeMessage() {
    cy.get(".greet.welcome").should("contain", "Welcome");
  }

  verifyValidationErrors() {
    cy.get(".mage-error").should("be.visible");
  }
}

export default new CreateAccountPage();

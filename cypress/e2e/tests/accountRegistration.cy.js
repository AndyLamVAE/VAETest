 import homePage from '../../pages/homePage';
 import createAccountPage from '../../pages/createAccountPage';

describe('Test Account Registration Functionality', () => {
  it('should create a new account registration by filling required fields', () => {
    
   // Go to Home Page and click "Create an Account" link (top right)
    homePage.visit();
    homePage.clickCreateAccountLink();

    // Fill in required fields
    const password = '111Tester';
    const randomId = Cypress._.random(1000, 9999);
    const email = `Tester${randomId}@testmail.com`;
   
    createAccountPage.addFirstName('Andy');
    createAccountPage.addLastName('Tester');
    createAccountPage.addEmailField(email);
    createAccountPage.addPasswordField(password);
    createAccountPage.addConfirmPasswordField(password);
    createAccountPage.clickCreateAccountButton();
    

    // Validate welcome message after successful User Registration
    createAccountPage.verifyWelcomeMessage();
  });
});

  
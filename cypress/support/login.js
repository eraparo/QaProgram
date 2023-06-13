const user = 'Admin';
const pass = 'admin123';

Cypress.Commands.add('wrongLogin', (wrongUser, wrongPass) => { 
    cy.get('input[name="username"]').clear().type(wrongUser);
    cy.get('input[name="password"]').clear().type(wrongPass);
    cy.get('.oxd-button').click()
    cy.get('p').contains('Invalid credentials')
 })


 Cypress.Commands.add('withOutPass', (wrongUser) => { 
    cy.get('input[name="username"]').clear().type(wrongUser);
    cy.get('.oxd-button').click()
    cy.get('span').contains('Required')
 })


Cypress.Commands.add('login',()=>{
    const user = 'Admin';
    const pass = 'admin123';
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    cy.get('input[name="username"]').type(user);
    cy.get('input[name="password"]').type(pass);
    cy.get('.oxd-button').click()
})
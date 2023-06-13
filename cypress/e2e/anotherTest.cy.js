describe("Test Admin", { testIsolation: false }, () => {
    it("Login", () => {
        cy.login()
      });
    it('Go to Admin',()=>{
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    })
});

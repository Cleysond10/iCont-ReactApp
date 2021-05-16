/* eslint-disable no-undef */
describe('Counter Page UI', () => {
  it('Should return toast.error when click red button', () => {
    cy.visit('/');
    cy.visit('/counter');
    cy.get('.btn-warn').click();
    cy.get('.btn-danger').click();
    cy.get('.Toastify__toast-container').contains('iCounter is already Zero');
  });
});

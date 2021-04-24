/// <reference types="cypress"/>

context('Dev Finances Agilizei', ()=>{

    it('cadastrar entradas',()=>{
    /// - entender o fluxo manualmente
    /// - mapear os elementos que vamos interagir
    /// - descrever as interações com o cypress
    /// - adicionar as asserções que a gente precisa

    cy.visit('https://devfinance-agilizei.netfly.app')
    cy.get ('data-table tbody tr').should('have.length', 0)


})

})
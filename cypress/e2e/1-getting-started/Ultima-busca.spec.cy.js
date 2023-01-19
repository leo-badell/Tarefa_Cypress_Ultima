describe('Ultima Projeto Leonardo', () => {

    beforeEach(() => {
        cy.visit('https://academybugs.com/my-cart/');
    })
    
    it('Buscar bugs ocultos', () => {
        cy.get('.ec_search_input').type('DARK BLUE DENIM JEANS')
        cy.get('[style="height: 46px"]').click();
        cy.get('.ec_search_input').type('BUDDHA BRACELET')
        cy.get('[style="height: 46px"]').click();
        cy.get('.ec_search_input').type('DARK GREY JEANS')
        cy.get('[style="height: 46px"]').click();
        cy.get('.test_title > .ec_image_link_cover')
            .should('contain', 'Dark Grey Jeans');    
            //Onde coloquei contain também posso colocar 'have.text'
    })
})

/*describe('Ultima Projeto Leonardo', () => {
    context('Dado que ao acessar no Academy bugs da uTest', () => {
      beforeEach(() => {
        cy.visit('https://academybugs.com/my-cart/')
      })
      
      context('Quando digito DARK BLUE DENIM JEANS no buscador', () => {
        beforeEach(() => {
          cy.get('.ec_search_input').type('DARK BLUE DENIM JEANS')
          cy.get('[style="height: 46px"]').click();
        })
  
        it('Então vejo o resultado esperado do que procurei.', () => {
            cy.get('.test_title > .ec_image_link_cover')
            .should('contain', 'DARK BLUE DENIM JEANS')
        })
      })
  
      context('Quando digito BUDDHA BRACELET no buscador', () => 
        beforeEach(() => {
          cy.get('.ec_search_input').type('BUDDHA BRACELET')
          cy.get('[style="height: 46px"]').click();
           
        })
  
        it('Então vejo o resultado esperado do que procurei.', () => {
            cy.get('.test_title > .ec_image_link_cover')
            .should('contain', 'BUDDHA BRACELET')
       })
    })
  
     context('Quando digito DARK GREY JEANS no buscador', () => {
        beforeEach(() => {
          cy.get('.ec_search_input').type('DARK GREY JEANS')
          cy.get('[style="height: 46px"]').click();
        })
  
        it('Então vejo o resultado esperado do que procurei.', () => {
            cy.get('.test_title > .ec_image_link_cover')
            .should('contain', 'DARK GREY JEANS')
        })
      })
        })
      })*/
    

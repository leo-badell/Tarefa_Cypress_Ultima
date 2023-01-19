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
describe('API Testing', () => {
    beforeEach(() => {
      cy.request('https://jsonplaceholder.typicode.com/albums')
        .as('albums')
    })
  
    it('should return a list of albums', () => {
      cy.get('@albums')
        .its('status')
        .should('eq', 200)
  
      cy.get('@albums')
        .its('body')
        .should('be.an', 'array')
        .and('have.length.gt', 0)
    })
  
    it('should have appropriate properties for each album', () => {
      cy.get('@albums')
        .its('body')
        .then((albums) => {
          albums.forEach((album) => {
            expect(album).to.have.property('userId').that.is.a('number')
            expect(album).to.have.property('id').that.is.a('number')
            expect(album).to.have.property('title').that.is.a('string').and.not.empty
          })
        })
    })
  })
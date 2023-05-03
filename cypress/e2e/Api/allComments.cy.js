describe('API Testing', () => {
    beforeEach(() => {
      cy.request('https://jsonplaceholder.typicode.com/comments')
        .as('comments')
    })
  
    it('should return a list of comments', () => {
      cy.get('@comments')
        .its('status')
        .should('eq', 200)
  
      cy.get('@comments')
        .its('body')
        .should('be.an', 'array')
        .and('have.length.gt', 0)
    })
  
    it('should have appropriate properties for each comment', () => {
      cy.get('@comments')
        .its('body')
        .then((comments) => {
          comments.forEach((comment) => {
            expect(comment).to.have.property('postId')
            expect(comment).to.have.property('id')
            expect(comment).to.have.property('name')
            expect(comment).to.have.property('email')
            expect(comment).to.have.property('body')
          })
        })
    })
    it('should have appropriate properties for all comment', () => {
        cy.get('@comments')
          .its('body')
          .then((comments) => {
            comments.forEach((comment) => {
              expect(comment).to.have.property('postId').that.is.a('number')
              expect(comment).to.have.property('id').that.is.a('number')
              expect(comment).to.have.property('name').that.is.a('string').and.not.empty
              expect(comment).to.have.property('email').that.is.a('string').and.satisfy((email) => Cypress._.includes(email, '@'))
              expect(comment).to.have.property('body').that.is.a('string').and.not.empty
            })
          })
  })
})
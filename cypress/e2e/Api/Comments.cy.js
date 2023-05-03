describe('API Testing', () => {
    beforeEach(() => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1/comments')
        .as('comments')
    })
  
    it('should return a list of comments for post 1', () => {
      cy.get('@comments')
        .its('status')
        .should('eq', 200)
  
      cy.get('@comments')
        .its('body')
        .should('have.length', 5)
    })
  
    it('should return the correct comment details', () => {
      cy.get('@comments')
        .its('body')
        .then((comments) => {
          const expectedEmail = 'Eliseo@gardner.biz'
          const expectedBody = 'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' +
            'tempora quo necessitatibus\n' +
            'dolor quam autem quasi\n' +
            'reiciendis et nam sapiente accusantium'
  
          const comment = comments[0]
          expect(comment.email).to.equal(expectedEmail)
          expect(comment.body).to.equal(expectedBody)
        })
    })
    it.only('should retrieve comments for post with ID 1', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1/comments')
          .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length(5)
            const comment = response.body[0]
            expect(comment.postId).to.equal(1)
            expect(comment.id).to.be.a('number')
            expect(comment.name).to.be.a('string')
            expect(comment.email).to.be.a('string')
            expect(comment.body).to.be.a('string')
          })
      })
    })
  
  
 
  
  
  
  
  
  
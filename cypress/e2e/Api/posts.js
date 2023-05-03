describe('API Testing', () => {
  beforeEach(() => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .as('posts')
  })

  it('should return a list of posts', () => {
    cy.get('@posts')
      .its('status')
      .should('eq', 200)

    cy.get('@posts')
      .its('body')
      .should('have.length', 100)
  })

  it('should return the correct post', () => {
    cy.get('@posts')
      .its('body')
      .then((posts) => {
        const postId = 1
        const expectedTitle = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        const expectedBody = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'

        const post = posts.find((post) => post.id === postId)
        expect(post.title).to.equal(expectedTitle)
        expect(post.body).to.equal(expectedBody)
      })
  })
})
export const user = `
query {
  user(username: "bpreston5393") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
      }
    }
  }
}
`
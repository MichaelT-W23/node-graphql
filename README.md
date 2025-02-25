# Node GraphQL
This is a GraphQL api I made using Node and Apollo Server. It does basically the exact same thing as the other Python [BookQL](https://github.com/MichaelT-W23/book_graphql_api) api.

## React GraphQL Website
### [Link to React GraphQL Website](https://michaelt-w23.github.io/react-graphql-website)

## Technologies Used
- Node
- JavaScript
- Apollo Server
- SQLite3

# Queries

Get All Authors
```
query {
  getAllAuthors {
      id
      name
      age
      nationality
      books {
        id
        title
        publicationYear
        genre
      }
  }
}
```

Get All Books
```
query {
  getAllBooks {
      id
      title
      publicationYear
      genre
      author {
        id
        name
        age
        nationality
      }
  }
}
```

Get Author by ID
```
query {
  getAuthor(id: 1) {
      id
      name
      age
      nationality
      books {
        id
        title
        publicationYear
        genre
      }
  }
}
```

Get Book By ID
```
query {
  getBook(id: 1) {
      id
      title
      publicationYear
      genre
      author {
        id
        name
        age
        nationality
      }
  }
}
```

Get All Genres
```
query {
  getAllGenres
}
```

Get Book By Genre
```
query {
  getBooksByGenre(genre: "Fantasy") {
      id
      title
      publicationYear
      genre
      author {
        id
        name
        age
        nationality
      }
  }
}
```

# Mutations 

Create Author 

```
mutation {
    createAuthor(name: "Alice", age: 29, nationality: "British") {
        id
        name
        age
        nationality
    }
}
```

Create Book

```
mutation {
    createBook(
        title: "Lord of the Rings", 
        publicationYear: 1954, 
        genre: "fantasy", 
        authorId: 2
    ) {
        id
        title
        publicationYear
        genre
        author {
          id
          name
          age
          nationality
        }
    }
}
```

Delete Author By ID

```
mutation {
    deleteAuthor(authorId: 1)
}
```

Delete Book By ID
```
mutation {
    deleteBook(bookId: 1)
}
```



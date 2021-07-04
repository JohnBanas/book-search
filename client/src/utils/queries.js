import gql from 'graphql-tag';

export const GET_ME = gql`
  query Auth($token: ID!) {
    Auth(token: $token) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;
import { gql } from '@apollo/client'

/* export const SIGNIN = gql`
  mutation Authenticate($username: String! , $password: String!) {
    authenticate(credentials: {username: $username, password: $password}) {
      accessToken
    }
}
` */

export const SIGNIN = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
}
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
}
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
}
`

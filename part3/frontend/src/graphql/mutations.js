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

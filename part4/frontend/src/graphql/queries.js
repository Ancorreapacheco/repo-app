import { gql } from '@apollo/client'
import { F_REPOSITORIES_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
	query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
			edges {
				node {
					...RepositoriesDetails
				}
        cursor
			}
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
		}
	}
  ${F_REPOSITORIES_DETAILS}
`


export const ME = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          createdAt
          rating
          text
          repository {
            id
            ownerName
            name
            url
          }
          
        }
        cursor
      }
      pageInfo {
        startCursor
      
        endCursor
        hasNextPage
      }
    }
  }
}
`
/* export const ME = gql`
query Me{
  me {
    id
    username
  }
}
` */

export const GET_REPOSITORY_BY_ID = gql`
  query get_repository_by_id($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoriesDetails
    }
  }
  ${F_REPOSITORIES_DETAILS}
  `

export const GET_REPOSITORY_REVIEW_BY_ID = gql`
  query get_repository_review_by_id($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews (first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
  
  `
/* export const GET_REPOSITORY_REVIEW_BY_ID = gql`
  query get_repository_review_by_id($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  
  ` */


import { gql } from '@apollo/client'
import { F_REPOSITORIES_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
	query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
			edges {
				node {
					...RepositoriesDetails
				}
			}
		}
	}
  ${F_REPOSITORIES_DETAILS}
`

export const ME = gql`
query Me{
  me {
    id
    username
  }
}
`

export const GET_REPOSITORY_BY_ID = gql`
  query get_repository_by_id($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoriesDetails
    }
  }
  ${F_REPOSITORIES_DETAILS}
  `

export const GET_REPOSITORY_REVIEW_BY_ID = gql`
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
  
  `

/* export const GET_REPOSITORIES = gql`
	query Repositories {
		repositories {
			edges {
				node {
					id
					fullName
					description
					language
					forksCount
					stargazersCount
					ratingAverage
					reviewCount
					ownerAvatarUrl
				}
			}
		}
	}
`
 */
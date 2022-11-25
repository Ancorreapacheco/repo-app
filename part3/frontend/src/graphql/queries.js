import { gql } from '@apollo/client'
import { F_REPOSITORIES_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
	query Repositories {
		repositories {
			edges {
				node {
					...RepositoriesDetails
				}
			}
		}
	}
  ${F_REPOSITORIES_DETAILS}
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
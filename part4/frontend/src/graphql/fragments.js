import { gql } from '@apollo/client'

export const F_REPOSITORIES_DETAILS = gql`
  fragment RepositoriesDetails on Repository {
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

`
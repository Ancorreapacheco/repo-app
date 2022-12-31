import { DELETE_REVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useDeleteReview= () => {

  const [mutate, result] = useMutation(DELETE_REVIEW,{    
    refetchQueries:['getCurrentUser'],
  })

  const deleteReview =async (id) => {

    await mutate({
      variables: {
        deleteReviewId: id
      }
    })
  }

  return [deleteReview, result]
}

export default useDeleteReview
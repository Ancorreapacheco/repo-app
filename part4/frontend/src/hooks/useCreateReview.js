import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW)

	const createReview = async (payload) => {
		const data = {
			ownerName: payload.repoOwnerName,
			rating: Number(payload.rating),
			repositoryName: payload.repoName,
			text: payload.review,
		}

		await mutate({
			variables: {
				review: { ...data },
			},
		})
	}

	return [createReview, result]
}

export default useCreateReview

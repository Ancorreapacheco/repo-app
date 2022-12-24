import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../utils/theme'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup' //For schema validation
import useCreateReview from '../hooks/useCreateReview'
import { useNavigate } from 'react-router-native'
import { useEffect } from 'react'


const styles = StyleSheet.create({
	form: {
		marginTop: 10,
		padding: 10,
		backgroundColor: theme.colors.white,
	},
	form_btnContainer: {
		alignItems: 'center',
	},
	form_btn: {
		backgroundColor: theme.colors.btn,
		borderRadius: 5,
		minWidth: 60,
		color: theme.colors.white,
		textAlign: 'center',
		paddingVertical: 6,
		paddingHorizontal: 12,
		overflow: 'hidden',
	},
})

const initialValues = {
	repoOwnerName: '',
	repoName: '',
	rating: '',
	review: '',
}

const validationSchema = yup.object().shape({
	repoOwnerName: yup
		.string()
		.required("Repository owner's username is a required string"),
	repoName: yup.string().required("Repository's name is a required string"),
	rating: yup
		.number()
		.min(0, 'Min should be 0')
		.max(100, 'Max should be 100')
		.required('Rating is a required number between 0 and 100'),
})

const CreateReviewForm = ({ onSubmit }) => {
	return (
		<View style={styles.form}>
			<FormikTextInput
				name='repoOwnerName'
				placeholder='Repository owner name'
			/>
			<FormikTextInput name='repoName' placeholder='Repository name' />
			<FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
			<FormikTextInput name='review' placeholder='Review' multiline />
			<Pressable style={styles.form_btnContainer} onPress={onSubmit}>
				<Text style={styles.form_btn}>Create Review</Text>
			</Pressable>
		</View>
	)
}

const CreateReviewFormContainer = ({ createReview }) => {
	return (
		<View>
			<Formik
				initialValues={initialValues}
				onSubmit={createReview}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	)
}

export default function CreateReview() {
	const [createReview, result] = useCreateReview()
  const navigate = useNavigate()  

	const submitReview = async (values) => {
		try {
			await createReview(values)           
		} catch (error) {
      Alert.alert(` ${error}`)
		}
	}

  useEffect(() => {
		if(result.called && result.data){
      const id = result?.data?.createReview?.repositoryId
      id && navigate(`/repository/${id}`)    
    }    
	}, [result])
  
  

	
	return <CreateReviewFormContainer createReview={submitReview} />
}

import { View, Text , StyleSheet, Pressable} from 'react-native'
import theme from '../utils/theme'
import React from 'react'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup' //For schema validation
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

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
	username: '',
	password: '',
  passwordConfirmation: ''
}



const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(5, 'username must be at least 5 characters')
    .max(30,'username must be max 30 characters')
		.required('username is required'),
	password: yup
		.string()
		.required('password is required')
		.min(5, 'password must have at least 5 characters')
		.max(50, 'password must have max 50 characters'),
  passwordConfirmation: yup
    .string()
    .required('password confirmation is required')
    .oneOf([yup.ref('password'),null], 'Password must match') //match password

})


const SignUpForm = ({onSubmit}) => {

  return(<View style={styles.form}>    
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry/>
    <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry/>
    <Pressable style={styles.form_btnContainer} onPress={onSubmit}>
      <Text style={styles.form_btn}>Sign Up</Text>
    </Pressable>
  </View>)
}

const SignUpFormContainer = ({ signUp }) => {
  return (
		<View>
			<Formik
				initialValues={initialValues}
				onSubmit={signUp}
        validationSchema={validationSchema}				
			>
				{({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	)
}
//TODO: signup mutation implementation
const SignUp = () => {

  const [signUp ] = useSignUp()
  const [signIn, signInResult] = useSignIn()
  const navigate = useNavigate()

  const submitSignup = async (values) => {
    console.log('signing up')
    const {password, username} = {...values}

    try {
      await signUp({password, username})
      await signIn({ username, password })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
		if (signInResult.data) {			
			navigate('/')
			return
		}    
	}, [signInResult])




  return (
    <View>
      <SignUpFormContainer signUp={submitSignup}/>
    </View>
  )
}

export default SignUp
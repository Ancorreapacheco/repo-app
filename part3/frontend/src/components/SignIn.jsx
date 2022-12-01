import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import {  View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik"; //Using formik for form statge management and validations with yulp
import * as yup from 'yup' //For schema validation
import useSignIn from "../hooks/useSignIn";


import theme from "../utils/theme";

const styles = StyleSheet.create({
  form:{    
    marginTop:10,
    padding: 10,
    backgroundColor: theme.colors.white,  
    },
    form_btnContainer:{
      alignItems: "center",
    },
    form_btn:{      
    backgroundColor: theme.colors.btn,
    borderRadius: 5,
    minWidth: 60,
    color: theme.colors.white,
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 12,  
    overflow: "hidden"
    }
  
})

const initialValues= {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5,'username must be at least 5 characters')
    .required('username is required'),
  password: yup
    .string()
    .required('password is required')
    .min(5,'password must have at least 5 characters')
})

const SigInForm = ({onSubmit}) => {
  return(
    <View style={styles.form}>
      <FormikTextInput name='username' placeholder='Username' />   
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />   
      <Pressable style={styles.form_btnContainer} onPress={onSubmit}>
        <Text style={styles.form_btn} >Sign In</Text>
      </Pressable> 
    </View>
  )
}
//TODO 10.14

const SignIn = () => {

  const [ signIn ] = useSignIn()

  const login =  async (values) => {
    const {username, password} = values

    try {
      const {data} = await signIn({username, password})      
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <View>      

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={login}>
        {({ handleSubmit }) => <SigInForm onSubmit={handleSubmit} />}
      </Formik>     

    </View>
  )
};

export default SignIn;